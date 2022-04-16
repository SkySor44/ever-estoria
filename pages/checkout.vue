<template>
  <div>
    <form id="payment-form">
      <input type="text" id="email" placeholder="Enter email address" />
      <div id="payment-element">
        <!--Stripe.js injects the Payment Element-->
      </div>
      <button id="submit">
        <div class="spinner hidden" id="spinner"></div>
        <span id="button-text">Pay now</span>
      </button>
      <div id="payment-message" class="hidden"></div>
    </form>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";

const cartStore = useCartStore();

definePageMeta({
  pageTransition: false,
  layoutTransition: false,
});

const config = useRuntimeConfig();
// The items the customer wants to buy
const items = cartStore.cart;
let elements;

onMounted(async () => {
  const stripe = window.Stripe(config.public.stripePublicKey);

  const initialize = async () => {
    try {
      const response = await $fetch("/api/checkout", {
        method: "post",
        body: { items },
      });

      const { clientSecret, amount } = await response;
      localStorage.setItem("amount", amount);
      const appearance = {
        theme: "stripe",
        variables: {
          colorPrimary: "#cbb4a0",
          colorText: "#544b3d",
        },
      };
      elements = stripe.elements({ appearance, clientSecret });

      const paymentElement = elements.create("payment");
      paymentElement.mount("#payment-element");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: window.location.origin + "/payment-complete",
        receipt_email: document.getElementById("email").value,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      showMessage(error.message);
    } else {
      showMessage("An unexpected error occured.");
    }

    setLoading(false);
  };

  const checkStatus = async () => {
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

    switch (paymentIntent.status) {
      case "succeeded":
        showMessage("Payment succeeded!");
        break;
      case "processing":
        showMessage("Your payment is processing.");
        break;
      case "requires_payment_method":
        showMessage("Your payment was not successful, please try again.");
        break;
      default:
        showMessage("Something went wrong.");
        break;
    }
  };

  const showMessage = (messageText) => {
    const messageContainer = document.querySelector("#payment-message");

    messageContainer.classList.remove("hidden");
    messageContainer.textContent = messageText;

    setTimeout(function () {
      messageContainer.classList.add("hidden");
      messageText.textContent = "";
    }, 4000);
  };

  // Show a spinner on payment submission
  const setLoading = (isLoading) => {
    if (isLoading) {
      // Disable the button and show a spinner
      document.querySelector("#submit").disabled = true;
      document.querySelector("#spinner").classList.remove("hidden");
      document.querySelector("#button-text").classList.add("hidden");
    } else {
      document.querySelector("#submit").disabled = false;
      document.querySelector("#spinner").classList.add("hidden");
      document.querySelector("#button-text").classList.remove("hidden");
    }
  };

  initialize();
  checkStatus();

  document
    .querySelector("#payment-form")
    .addEventListener("submit", handleSubmit);
});

onUnmounted(() => {
  document
    .querySelector("#payment-form")
    .removeEventListener("submit", handleSubmit);
});
</script>

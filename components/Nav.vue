<template>
  <nav
    class="
      surface-overlay
      py-3
      px-6
      shadow-2
      flex
      align-items-center
      justify-content-between
      relative
      lg:static
    "
    style="min-height: 80px"
  >
    <img
      src="https://wpmlpaqmiveicmhhdkjq.supabase.co/storage/v1/object/sign/website-images/main-logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlLWltYWdlcy9tYWluLWxvZ28ucG5nIiwiaWF0IjoxNjQ5NTQxMjIwLCJleHAiOjE5NjQ5MDEyMjB9.GhqdkRuKh37d5XI3p5cHEm3T3OLhJKI3d8KiXo0gO2M"
      alt="Image"
      height="40"
      class="mr-0 lg:mr-6"
    />
    <a
      v-ripple
      class="cursor-pointer block lg:hidden text-700 mt-1 p-ripple"
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        leaveToClass: 'hidden',
        hideOnOutsideClick: true,
      }"
    >
      <i class="pi pi-bars text-4xl"></i>
    </a>
    <div
      class="
        align-items-center
        flex-grow-1
        justify-content-between
        hidden
        lg:flex
        absolute
        lg:static
        w-full
        surface-overlay
        left-0
        top-100
        z-1
        shadow-2
        lg:shadow-none
      "
    >
      <ul
        class="
          list-none
          p-0
          m-0
          flex
          lg:align-items-center
          select-none
          flex-column
          lg:flex-row
        "
      >
        <li>
          <NuxtLink
            to="/"
            v-ripple
            class="
              flex
              px-6
              p-3
              lg:px-3
              lg:py-2
              align-items-center
              text-600
              hover:text-900
              hover:surface-100
              font-medium
              cursor-pointer
              transition-colors transition-duration-150
              p-ripple
              no-underline
              border-round-top
            "
            :class="{
              'underline-ever-estoria-rose': $route.name === 'index',
            }"
          >
            <i class="pi pi-home mr-2"></i>
            <span>Home</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="products"
            v-ripple
            class="
              flex
              px-6
              p-3
              lg:px-3
              lg:py-2
              align-items-center
              text-600
              hover:text-900
              hover:surface-100
              font-medium
              cursor-pointer
              transition-colors transition-duration-150
              p-ripple
              no-underline
              border-round-top
            "
            :class="{
              'underline-ever-estoria-rose': $route.name === 'products',
            }"
          >
            <i class="pi pi-shopping-bag mr-2"></i>
            <span>Products</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="about-us"
            v-ripple
            class="
              flex
              px-6
              p-3
              lg:px-3
              lg:py-2
              align-items-center
              text-600
              hover:text-900
              hover:surface-100
              font-medium
              cursor-pointer
              transition-colors transition-duration-150
              p-ripple
              no-underline
              border-round-top
            "
            :class="{
              'underline-ever-estoria-rose': $route.name === 'about-us',
            }"
          >
            <i class="pi pi-users mr-2"></i>
            <span>About Us</span>
          </NuxtLink>
        </li>
      </ul>
      <ul
        class="
          list-none
          p-0
          m-0
          flex
          lg:align-items-center
          select-none
          flex-column
          lg:flex-row
          border-top-1
          surface-border
          lg:border-top-none
        "
      >
        <li>
          <a
            v-ripple
            class="
              flex
              px-6
              p-3
              lg:px-3
              lg:py-2
              align-items-center
              text-600
              hover:text-900
              hover:surface-100
              font-medium
              border-round
              cursor-pointer
              transition-colors transition-duration-150
              p-ripple
            "
          >
            <i
              class="pi pi-shopping-cart text-base lg:text-2xl mr-2 lg:mr-0"
            ></i>
            <span class="block lg:hidden font-medium">Shopping Cart</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

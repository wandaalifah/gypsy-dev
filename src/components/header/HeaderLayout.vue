<template>
  <div class="bg-amber-lighten-3">
      <v-row justify="space-between" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="black"
          variant="text"
          class="mx-2 px-10"
          rounded="xl"
        >
          {{ link }}
        </v-btn>
      </v-row>
  </div>
</template>

  <script>
  export default {
    name: 'HeaderLayout',
    data: () => ({
      links: [
        'Logo',
        'Events',
        'Community',
        'Research',
        'Arts',
        'About Us',
        'Login',
      ],
    }),
  }
  </script>
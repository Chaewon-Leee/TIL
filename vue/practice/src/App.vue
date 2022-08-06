<template>
  <div id="body">
    <header>
      <button @click="goaqjrj">햄버거</button>
      <a
        class="btn btn-primary"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        Link with href
      </a>
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Button with data-bs-target
      </button>

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
          <div class="dropdown mt-3">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <nav :class="{ navv: isnone }">
      <button class="navbutton"><router-link to="/">Home</router-link></button>
      <button class="navbutton">
        <router-link to="/about">About</router-link>
      </button>
      <button class="navbutton">
        <router-link to="/databinding/string">String</router-link>
      </button>
      <button class="navbutton">
        <router-link to="/databinding/html">Html</router-link>
      </button>
      <!-- <button type="button" class="btn btn-danger">Danger</button> -->
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  conponents: {},
  data() {
    return {
      isnone: false
    }
  },
  setup() {},
  created() {},
  mounted() {},
  methods: {
    goaqjrj() {
      this.isnone = !this.isnone
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

template {
  height: 100vh;
  width: 100vw;
  margin: 0;
}

/* body {
  height: 100vh;
  width: 100vw;
} */

header {
  height: 55px;
  width: 100%;
  background-color: aquamarine;
}

nav {
  background-color: blueviolet;
  height: calc(100vh - 55px);
  width: 250px;
  float: left;
}
.navv {
  display: none;
}
.navbutton {
  width: 100%;
  height: 60px;
  background-color: transparent;
  border: 3px solid greenyellow;
}
.navbutton:hover {
  background-color: aquamarine;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

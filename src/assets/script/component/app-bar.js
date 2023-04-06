class AppBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/" onclick="route()">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/events" onclick="route()">Events</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/community" onclick="route()">Community</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/research" onclick="route()">Research</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/arts" onclick="route()">Arts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
    }
  }
  
customElements.define('app-bar', AppBar);  
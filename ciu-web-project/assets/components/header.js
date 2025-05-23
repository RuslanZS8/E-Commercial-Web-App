
class Header extends HTMLElement {
	connectedCallback() {
	  this.innerHTML = `
		<header class="header">
			<div class="container">

				<div class="header_inner">	
					<a href="index.html" class="header-logo">
						Shopping
						<img src="assets/img/logo.svg" alt="">
						Hunter
					</a>
		
					<nav class="header_menu">
						<ul class="nav-list">
							<li class="nav-item">
								<a href="home.html" title="Home">Home</a>
							</li>
							<li class="nav-item">
								<a href="index.html" title="">Online Shopping</a>
							</li>
							<li class="nav-item">
								<a href="calculate.html" title="">Calculate</a>
							</li>
							<li class="nav-item">
								<a href="contact.html" title="">Contact us</a>
							</li>
							<li class="nav-item">
								<a href="#" class="accent_text" style="display: flex; align-items: center;">
									<!-- Log in -->
									Log in
									<svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" style="width: 40px; height: 35px; margin-right: -6px;" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
									</svg>
								</a>
							</li>
						</ul>
						
					</nav>
				</div>
			</div>
		</header>
	  `;
	}
}

customElements.define('header-component', Header);
execute()

function execute() {
    document.getElementById("nav").innerHTML =
        `<div id="nav__container">
            <div id="nav__user__container">
                <div id="nav__user__icon__container">
                    <p id="nav__user__char">F</p>
                </div>
                <p id="nav__user__username"><strong>Facu</strong>Dev</p>
            </div>
            <div id="nav__pages__container">
                <a href="../pages/index.html" target="_self" id="nav__pages__index"
                    class="nav__pages__link">Portada</a>
                <a href="../pages/about.html" target="_self" id="nav__pages__about"
                    class="nav__pages__link">¿Quién soy?</a>
                <a href="../pages/skills.html" target="_self" id="nav__pages__skills"
                    class="nav__pages__link">Habilidades</a>
                <a href="../pages/gallery.html" target="_self" id="nav__pages__gallery"
                    class="nav__pages__link">Proyectos</a>
                <a href="../pages/contact.html" target="_self" id="nav__pages__contact"
                    class="nav__pages__link">Contacto</a>
            </div>
        </div>`
    let element = document.getElementById("nav__pages__" + document.body.id)
    element.classList.toggle("nav__pages__link__selected")
}
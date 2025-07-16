
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("students");
  fetch("assets/data/estudiantes.csv")
    .then(response => response.text())
    .then(text => {
      const rows = text.trim().split("\n").slice(1);
      rows.forEach((row, i) => {
        const [nombre, descripcion, enlace] = row.split(",");
        const col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `
          <div class="card h-100" data-aos="fade-up" data-aos-delay="${i * 50}">
            <div class="card-body">
              <h5 class="card-title">${nombre}</h5>
              <p class="card-text">${descripcion}</p>
              <a href="${enlace}" target="_blank" class="btn btn-dark btn-sm">Ver trabajo</a>
            </div>
          </div>
        `;
        container.appendChild(col);
      });
    });
});

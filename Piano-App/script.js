// Profils simulés en mémoire (remplacé plus tard par du stockage réel)
let profils = ["Philippe", "Rose"];
let profilSelectionne = null;

function afficherProfils() {
  const container = document.getElementById("profils");
  container.innerHTML = "";

  // Afficher les boutons profils existants
  profils.forEach(nom => {
    const btn = document.createElement("button");
    btn.className = "profil-btn";
    btn.textContent = nom;
    if (profilSelectionne === nom) btn.classList.add("selected");
    btn.onclick = () => {
      profilSelectionne = nom;
      afficherProfils();
      document.getElementById("continuer-btn").disabled = false;
    };
    container.appendChild(btn);
  });

  // Bouton "Nouveau profil"
  const btnNouveau = document.createElement("button");
  btnNouveau.className = "profil-btn nouveau-profil-btn";
  btnNouveau.textContent = "Nouveau profil";
  btnNouveau.onclick = afficherChampNouveauProfil;
  container.appendChild(btnNouveau);
}

function afficherChampNouveauProfil() {
  document.getElementById("ajout-profil").className = "ajout-profil-visible";
  document.getElementById("nouveau-nom-profil").focus();
}

function creerNouveauProfil() {
  const nom = document.getElementById("nouveau-nom-profil").value.trim();
  if (nom && !profils.includes(nom)) {
    profils.push(nom);
    profilSelectionne = nom;
    document.getElementById("ajout-profil").className = "ajout-profil-cache";
    document.getElementById("nouveau-nom-profil").value = "";
    afficherProfils();
    document.getElementById("continuer-btn").disabled = false;
  }
}

document.getElementById("continuer-btn").onclick = function() {
  if (profilSelectionne) {
    // Redirige vers la page des leçons (tu adapteras plus tard)
    alert("Accès aux leçons pour " + profilSelectionne);
    // Ici tu pourrais faire: window.location.href = "lecons.html";
  }
};

afficherProfils();


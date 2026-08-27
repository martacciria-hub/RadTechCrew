document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('profile-content');
  if (!root) return;

  root.innerHTML = `
    <div class="profile-hero profile-personal">
      <div class="profile-avatar-large">
        <div class="avatar-drawing avatar-chica skin-medio hair-castano" aria-label="Avatar de técnico de radiología">
          <div class="avatar-hair"></div>
          <div class="avatar-face">
            <span class="avatar-eyes">••</span>
            <span class="avatar-mouth">⌣</span>
          </div>
          <div class="avatar-body">✚</div>
        </div>
      </div>
      <div class="profile-hero-text">
        <p class="eyebrow">MI PERFIL</p>
        <h2>Hola, Marta 👋</h2>
        <p class="profile-sub">Técnico/a en entrenamiento</p>
        <button id="profile-edit" class="profile-button" type="button">✏️ Editar perfil</button>
      </div>
    </div>
  `;
});
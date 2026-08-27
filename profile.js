(() => {
  const root = document.getElementById('profile-content');
  if (!root) return;

  root.innerHTML = `
    <div class="profile-simple">
      <div class="profile-avatar" aria-hidden="true">🩻</div>
      <div class="profile-info">
        <p class="eyebrow">MI PERFIL</p>
        <h2>Marta</h2>
        <p>RadTechCrew</p>
      </div>
    </div>
  `;
})();

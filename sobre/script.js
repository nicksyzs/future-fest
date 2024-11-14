function openProfile(member) {
  const profile = document.getElementById(`${member}Profile`);
  const name = profile.querySelector('h3').textContent; 
  const info = profile.querySelector('.profile-info').textContent; 

  const profileContent = document.getElementById('profileContent');
  profileContent.innerHTML = `<h3>${name}</h3><p class="profile-info">${info}</p>`;

  const profileModal = document.getElementById('profileModal');
  profileModal.style.display = 'block';
  profileModal.classList.add('slide-up');
}

function closeProfileModal() {
  const profileModal = document.getElementById('profileModal');
  profileModal.classList.remove('slide-up');
  setTimeout(() => {
      profileModal.style.display = 'none';
  }, 300);
}





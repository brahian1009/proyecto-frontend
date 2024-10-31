document.getElementById('menu-toggle').addEventListener('click', function () {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');

  // cuando se le da click por primera vez se oculta
  sidebar.classList.toggle('hidden');

  //Cuando se le da click por segunda vez se muesrta
  if (sidebar.classList.contains('hidden')) {
    mainContent.classList.add('shifted');
  } else {
    mainContent.classList.remove('shifted');
  }
});

document.querySelectorAll('.sidebar-item').forEach(item => {
  item.addEventListener('click', function () {

    document.querySelectorAll('.sidebar-item').forEach(i => {
      if (i != this) {
        i.classList.remove('active');
      }
    })
    this.classList.toggle('active');
  });
});

document.getElementById('user-photo').addEventListener('click', function () {
  const dropdown = document.getElementById('dropdown');
  dropdown.classList.toggle('show')
})

document.addEventListener('click', function (event) {
  const userPhoto = document.getElementById('user-photo');
  const dropdown = document.getElementById('dropdown');

  if (!userPhoto.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.remove('show');
  }
})

document.getElementById('close-btn-create').addEventListener('click', function () {
  document.getElementById('modal-create').style.display = 'none';
});

document.getElementById('close-btn-edit').addEventListener('click', function () {
  document.getElementById('modal-edit').style.display = 'none';
});

document.getElementById('cancel-btn').addEventListener('click', function () {
  document.getElementById('modal-edit').style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target.className == 'modal-create') {
    document.getElementById('modal-create').style.display = 'none';
  }

  if (event.target.className == 'modal-edit') {
    document.getElementById('modal-edit').style.display = 'none';
  }
});

document.querySelectorAll('.submenu-item').forEach(item => {
  if (item.textContent == 'Crear') {
    item.addEventListener('click', function () {
      document.getElementById('modal-create').style.display = 'flex';
    })
  }
})

const currentPath = window.location.pathname;

if (currentPath == '/users.html') {
  document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', function () {

      const card = this.closest('.card');
      const fullName = card.querySelector('h3').innerText.split(": ")[1];
      const email = card.querySelector('p:nth-child(2)').innerText.split(": ")[1];
      const password = card.querySelector('p:nth-child(3)').innerText.split(": ")[1];
      const telefono = card.querySelector('p:nth-child(4)').innerText.split(": ")[1];
      const role = card.querySelector('p:nth-child(5)').innerText.split(": ")[1];
      const id = card.querySelector('p:nth-child(6)').innerText.split(": ")[1];

      console.log(fullName, email, password, telefono, role)

      document.getElementById('editFullName').value = fullName;
      document.getElementById('editDocumentNumber').value = email;
      document.getElementById('editFileId').value = telefono;
      document.getElementById('editPassword').value = password;
      document.getElementById('editRole').value = role;
      document.getElementById('editId').value = id;

      document.getElementById('modal-edit').style.display = 'flex';

    });
  });
}

if (currentPath == '/dashboard.html') {
  document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', function () {
      console.log('Entro hasta aquí ');
      const card = this.closest('.card');
      const fullName = card.querySelector('h3').innerText.split(": ")[1];
      const typeDocument = card.querySelector('p:nth-child(2)').innerText.split(": ")[1];
      const numberDocument = card.querySelector('p:nth-child(3)').innerText.split(": ")[1];
      const fileId = card.querySelector('p:nth-child(4)').innerText.split(": ")[1];
      const role = card.querySelector('p:nth-child(5)').innerText.split(": ")[1];
      const status = card.querySelector('p:nth-child(6)').innerText.split(": ")[1];

      document.getElementById('editFullName').value = fullName;
      document.getElementById('editDocumentType').value = typeDocument;
      document.getElementById('editDocumentNumber').value = numberDocument;
      document.getElementById('editFileId').value = fileId;
      document.getElementById('editRole').value = role;
      document.getElementById('editStatus').value = status;

      document.getElementById('modal-edit').style.display = 'flex';

    });
  });
}

function checkAuth() {
  const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    const [name, value] = cookie.split('=').map(c => c.trim());
    acc[name] = value;
    return acc;
  }, {})

  if (cookies.isLoggedIn != 'true') {
    window.location.href = '/login';
  }
}

document.getElementById('logout-btn').addEventListener('click', function () {
  document.cookie = "isLoggedIn=; path=/; max-age=0"
  window.location.href = "/login.html";
})

if (currentPath != '/users.html') {
  document.getElementById('users').addEventListener('click', function () {
    window.location.href = "/users.html";
  })
}

if (currentPath != '/tools.html') {
  document.getElementById('tools').addEventListener('click', function () {
    window.location.href = "/tools.html";
  })
}

if (currentPath != '/dashboard.html') {
  document.getElementById('inicio').addEventListener('click', function () {
    window.location.href = "/dashboard.html";
  })
}
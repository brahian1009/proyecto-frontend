$('#formRegister').on('submit', function(event){
    event.preventDefault();

    const formData={
    nombre: $('input[name="nombre"]').val(),
    correo: $('input[name="correo"]').val(),
    contrasena: $('input[name="contrasena"]').val(),
    telefono: $('input[name="telefono"]').val(),
    rol:$('select[name="rol"]').val()
    }

    $.post('http://localhost:4000/auth/createUser',
        formData,
        function(data) {
            $('#formRegister')[0].reset();
            setTimeout(function(){
                window.location.href= 'http://localhost:4000/login.html';
            }, 5000);
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toastonmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer; 
                } 
            });
            Toast.fire({
                icon: "success",
                title: data.message
            });
        }
    )

});
$(document).ready(function(){
    // Adiciona um ouvinte de evento para o clique no menu hamburguer
    $('.menu-hamburguer').click(function() {
        // Mostra ou oculta a navegação ao clicar no menu hamburguer
        $('nav').slideToggle();
    });

    // Validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            veiculoDeInteresse: {
                required: true
            },
            tamanhoDoTenis: {
                required: false,
            }
        },
        messages: {
            nome: 'Este campo é requerido.',
            email: 'Este campo é requerido.',
            veiculoDeInteresse: 'Este campo é requerido.',
            tamanhoDoTenis: 'Este campo é requerido.'
        },
        submitHandler: function(form) {
            // Lógica de envio do formulário
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            // Tratamento para campos inválidos
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    // Adiciona um ouvinte de evento para o clique nos botões "Adicionar ao carrinho"
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato'); // Destino da rolagem suave
        const nomeVeiculo = $(this).parent().find('h3').text(); // Obtém o nome do veículo

        // Define o nome do veículo no campo do formulário
        $('#veiculo-interesse').val(nomeVeiculo);

        // Realiza a rolagem suave para a seção de contato
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});
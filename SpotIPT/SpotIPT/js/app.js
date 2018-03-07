// Registar o nosso "main" para quando o DOM está carregado.
// O 'DOMContentLoaded' é executado ligeiramente antes do 'load',
// logo, quando possível, deve ser usado.
document.addEventListener('DOMContentLoaded', function main(e) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', '/assets/xml/discot.xml');  // Configurar o URL para obter o XML.

    xhr.onload = function xmlLoaded(e) {  // Executado quando o conteúdo é carregado.
        if (xhr.status === 200) {  // OK
            var xml = xhr.responseXML;

            // 'xml' é um documento, tal como o 'document'.
            // Podemos desempenhar as mesmas tarefas nele que no 'document'.
            console.log(xml);  

            // Colocar os CDs do XML na página.

            var cds = xml.querySelectorAll('cd');

            for (var i = 0; i < cds.length; i++) {
                var cd = cds[i];

                var titulo = cd.getAttribute('titulo');
                
                var tituloContainer = document.createElement('p');

                tituloContainer.textContent = titulo;

                document.body.appendChild(tituloContainer);
            }

        } else {  // Erro
            console.error(`Status ${xhr.status}`, xhr.responseText);
        }
    };

    xhr.onerror = function communicationsError(e) {  // Problema de comunicação.
        console.error('An error occured.', e);
    };

    xhr.send();  // Enviar o pedido.
});

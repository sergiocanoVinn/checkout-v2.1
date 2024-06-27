
export const removeClassInput = input => {
    input.classList.remove('success')
}

export const checkValidInput = (input, hasNumbers = false) => {
    if (input.value.length === 0) {
        return
    }

    // Remuevo las clases para evitar conflicto con función de vtex
    input.classList.remove('success')
    input.classList.remove('error')

    let regex

    if (hasNumbers) {
        regex = new RegExp(/[\s\w]/g) // Permite letras, tildes, ñ, dígitos y espacios.
    } else {
        regex = new RegExp(/^[A-Za-zÁÉÍÓÚáéíóúñÑ]+[A-Za-zÁÉÍÓÚáéíóúñÑ\s]*$/g) // Permite letras, tildes, ñ y espacios.
    }

    if (regex.test(input.value)) {
        // Válido
        if (input.nextElementSibling) input.nextElementSibling.remove()
        input.classList.add('success')
    } else {
        input.classList.add('error')

        // Se elimina el span de vtex si existe
        if (input.nextElementSibling) input.nextElementSibling.remove()

        // Se crea el mensaje de error
        const span = document.createElement('span')
        const content = document.createTextNode('Caracteres no válidos')
        span.appendChild(content)
        span.classList.add('help', 'error')

        const parent = input.parentElement
        parent.append(span)
    }
}

export const checkValidInputEmail = input => {
    if (input.value.length === 0) {
        return
    }

    // Remuevo las clases para evitar conflicto con función de vtex
    input.classList.remove('success')
    input.classList.remove('error')

    let regex

    regex = new RegExp(/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i)

    if (regex.test(input.value)) {
        // Válido
        if (input.nextElementSibling) {
            input.classList.add('success');
            if ($(".validation-error").length > 0) {
                $(".validation-error").remove();
            }
        }
    } else {
        input.classList.add('error')

        // Se crea el mensaje de error
        if ($(".validation-error").length == 0) {
            const span = document.createElement('span')
            const content = document.createTextNode('Email no válido')
            span.appendChild(content)
            span.classList.add('help', 'error', 'validation-error')

            const parent = input.parentElement
            parent.append(span)
        }
    }
}
const drop = () => {
    // события перетаскивания
    // drag *
    // dragend *
    // dragenter - объект над dropArea! это событие возникает когда перетаскиваемый объект над какойто dropArea! dropArea это может быть любой элемент который воспринимет это событие
    // dragexit *
    // dragleave - объект за пределами dropArea
    // dragover - этот объект срабатывает каждые несколько сотен миллисекунд пока объект перетаскивает над dropArea! объект зависает в dropArea
    // dragstart *
    // drop - это событие возникает тогда когда пользователь отпустил кнопку мыши и наш перетаскиваемы объект упал в dropArea! объект отправлен в dropArea

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, .7)';
    }

    function unHighlight(item) {
        item.closest('.file_upload').style.border = 'none';
        if( item.closest('.calc_form') )
        {
            item.closest('.file_upload').style.backgroundColor = '#fff';
        } else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unHighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            input
            let dots;
            const arr = input.files[0].name.split('.');

            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });
};

export default drop;

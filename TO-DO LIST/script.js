var addBtn = document.getElementById('add');

addBtn.addEventListener('click', function() {
    var item = document.getElementById('input').value;
    if(item.length != 0)
        document.getElementsByClassName('list')[0].innerHTML += '<li>' + item + '<i class="fas fa-check fa-trash" id="delete"> </li>';
    
    else
        alert('Please add an item.')
    
    var deleteBtns = document.querySelectorAll('#delete');

    deleteBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            btn.parentNode.remove();
        });
    });

    document.getElementById('input').value = null;
});
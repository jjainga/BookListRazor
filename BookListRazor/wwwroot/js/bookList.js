let dataTable;

$(document).ready(function() {
    loadDataTable();
})

function loadDataTable() {
    dataTable = $('#DT_load').DataTable({
        "ajax": {
            "url": "/api/book",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            {"data": "title", "width":"30%"},
            {"data": "author", "width":"30%"},
            {"data": "isbn", "width":"30%"},
            {
                "data": "id",
                "render": function(data) {
                    return ` <div class="text-center">
                            <a href="/Books/Edit?id=${data}" class='btn btn-success text-white' style='cursor:pointer; width:70px;'>
                                Edit
                            </a>
                            <a class='btn btn-danger text-white' style='cursor:pointer; width:70px;'>
                                Delete
                            </a>
                            
                        </div>`;
                    }, "width": "30%"
            }
        ],
        "language": {
            "emptyTable": "No Data Found"
        },
        "width": "100%"
    });
}
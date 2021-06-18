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
                    return `
                        <div class="text-center>
                            <a href="/BookList/Edit?id=${data}" class="btn btn-success test-white" style="cursor:pointer, width: 70px">
                                Edit
                            </a>
                            <a  class="btn btn-danger test-white" style="cursor:pointer, width: 70px">
                                Delete
                            </a>
                        </div>
                    `}
                    , "width": "40%"

            }
        ],
        "language": {
            "emptyTable": "No Data Found"
        },
        "width": "100%"
    });
}
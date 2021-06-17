let dataTable;

$(document.readyState(() => {
    loadDataTable();
}))

const loadDataTable = () => {
    dataTable = $('#DT_Load').DataTable({
        "ajax" : {
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
                            <a href="/BookList/Edit?id=${data}" class="btn btn-success test-white" style="cursor:pointer, width: 100px">
                                Edit
                            </a>
                            <a  class="btn btn-danger test-white" style="cursor:pointer, width: 100px">
                                Delete
                            </a>
                        </div>
                    `;
                }, "width": "30%"

            }
        ],
        "language": {
            "emptyTable": "No Data Found"
        },
        "width": "100%"
    });
}
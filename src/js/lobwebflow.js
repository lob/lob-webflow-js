$(document).ready(function () {
  /* footer code */
  $(".toggle-footer-menu-input").each(function () {
    $(this).on("mousedown", function () {
      $(this).data("previousChecked", this.checked);
    });

    $(this).on("click", function () {
      if ($(this).data("previousChecked")) {
        $(this).prop("checked", false).data("previousChecked", false);
      } else {
        $(this).data("previousChecked", true);
      }
    });
  });
});

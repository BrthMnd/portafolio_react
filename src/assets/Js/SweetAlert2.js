import Swal from "sweetalert2";

export function AlertSwal(img) {
  return Swal.fire({
    imageUrl: `${img.imagen}`,
    imageWidth: "min-content",
    text: `${img.description}`,
    // icon: "warning",
    background: "rgba(255, 255, 255, 0.900)",
    color: "black",
    padding: "10px",
    showCancelButton: true,
    confirmButtonText: "ir",
    buttonsStyling: "default",
    confirmButtonColor: "#3085d6",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = img.url;
    }
  });
}

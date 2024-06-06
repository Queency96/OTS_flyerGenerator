document
  .getElementById('flyerForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const imageInput = document.getElementById('imageInput').files[0];
    const nameInput = document.getElementById('nameInput').value;
    // const dateInput = document.getElementById('dateInput').value;
    // const timeInput = document.getElementById('timeInput').value;

    if (imageInput) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('flyerImage').src = e.target.result;
      };
      reader.readAsDataURL(imageInput);
    }

    document.getElementById('flyerName').textContent = nameInput;
    // document.getElementById('flyerDate').textContent = `Date: ${dateInput}`;
    // document.getElementById('flyerTime').textContent = `Time: ${timeInput}`;

    const flyer = document.getElementById('flyer');
    flyer.classList.remove('d-none');

    const downloadBtn = document.getElementById('downloadButton');
    downloadBtn.classList.remove('d-none');

    // Generate downloadable image after the flyer is shown
    html2canvas(flyer).then((canvas) => {
      downloadBtn.href = canvas.toDataURL('image/png');
      downloadBtn.download = 'flyer.png';
    });
  });

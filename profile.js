const progressBar = document.getElementById("progress-bar");
        let progress = 0;

        function animateProgressBar() {
            if (progress < 95) {
                progress++;
                progressBar.style.width = progress + "%";
                progressBar.innerText = "Python skills";
                setTimeout(animateProgressBar, 20);
        }
      }
        window.onload = animateProgressBar;
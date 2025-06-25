
    function showPage(pageId) {
      document.querySelectorAll('.page').forEach(div => {
        div.classList.remove('active');
      });
      const target = document.getElementById(pageId);
      if (target) {
        target.classList.add('active');
      }
    }
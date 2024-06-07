document.getElementById('theme-select').addEventListener('change', function() {
    var theme = this.value;
    document.body.className = theme;
    localStorage.setItem('theme', theme);

    // Temaya göre kalp simgesinin rengini güncelle
    var heart = document.getElementById('heart-icon');
    if (theme === 'default') {
        heart.innerHTML = '❤️';
    } else if (theme === 'dark') {
        heart.innerHTML = '🖤';
    } else if (theme === 'light') {
        heart.innerHTML = '💛';
    } else if (theme === 'red') {
        heart.innerHTML = '❤️';
    } else if (theme === 'blue') {
        heart.innerHTML = '💙';
    } else if (theme === 'green') {
        heart.innerHTML = '💚';
    } else if (theme === 'orange') {
        heart.innerHTML = '🧡';
    } else if (theme === 'purple') {
        heart.innerHTML = '💜';
    } else if (theme === 'yellow') {
        heart.innerHTML = '💛';
    }
});

// Sayfa yüklendiğinde tema yüklemek için localStorage kontrolü
window.onload = function() {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
        document.getElementById('theme-select').value = savedTheme;

        // Sayfa yüklendiğinde kalp simgesinin rengini de güncelle
        var heart = document.getElementById('heart-icon');
        if (savedTheme === 'default') {
            heart.innerHTML = '🤍';
        } else if (savedTheme === 'dark') {
            heart.innerHTML = '🖤';
        } else if (savedTheme === 'light') {
            heart.innerHTML = '💛';
        } else if (savedTheme === 'red') {
            heart.innerHTML = '❤️';
        } else if (savedTheme === 'blue') {
            heart.innerHTML = '💙';
        } else if (savedTheme === 'green') {
            heart.innerHTML = '💚';
        } else if (savedTheme === 'orange') {
            heart.innerHTML = '🧡';
        } else if (savedTheme === 'purple') {
            heart.innerHTML = '💜';
        } else if (savedTheme === 'yellow') {
            heart.innerHTML = '💛';
        }
    }
};

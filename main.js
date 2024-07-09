
function showUserInterface() {
    document.getElementById('roleSelection').style.display = 'none';
    document.getElementById('userDashboard').style.display = 'block';
    //document.getElementById('adminDashboard').style.display = 'none';
}

function showAdminInterface() {
    document.getElementById('roleSelection').style.display = 'none';
    document.getElementById('userDashboard').style.display = 'none';
    //document.getElementById('adminDashboard').style.display = 'block';
}

function showRoleSelection() {
    document.getElementById('roleSelection').style.display = 'block';
    document.getElementById('userDashboard').style.display = 'none';
    //document.getElementById('adminDashboard').style.display = 'none';
}

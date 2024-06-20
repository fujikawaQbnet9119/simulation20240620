// script.js

function calculateSalary() {
    const experience = parseInt(document.getElementById('experience').value);
    const qualification = parseInt(document.getElementById('qualification').value);
    const location = parseInt(document.getElementById('location').value);
    const menExperience = parseInt(document.getElementById('menExperience').value);

    const skillScores = [
        parseInt(document.getElementById('understanding').value),
        parseInt(document.getElementById('proposals').value),
        parseInt(document.getElementById('conversation').value),
        parseInt(document.getElementById('counseling').value),
        parseInt(document.getElementById('attitude').value),
        parseInt(document.getElementById('feedback').value),
        parseInt(document.getElementById('satisfaction').value),
        parseInt(document.getElementById('cutting').value),
        parseInt(document.getElementById('efficiency').value),
        parseInt(document.getElementById('requests').value),
        parseInt(document.getElementById('clipper').value),
        parseInt(document.getElementById('fade').value)
    ];

    const baseSalary = getBaseSalary(experience, menExperience);
    const qualificationAllowance = getQualificationAllowance(qualification);
    const locationAllowance = getLocationAllowance(location);
    const personalAllowance = getPersonalAllowance(skillScores);

    const totalSalary = baseSalary + qualificationAllowance + locationAllowance + personalAllowance;
    
    document.getElementById('baseSalary').textContent = `¥${baseSalary.toLocaleString()}`;
    document.getElementById('locationAllowance').textContent = `¥${locationAllowance.toLocaleString()}`;
    document.getElementById('qualificationAllowance').textContent = `¥${qualificationAllowance.toLocaleString()}`;
    document.getElementById('personalAllowance').textContent = `¥${personalAllowance.toLocaleString()}`;
    document.getElementById('totalSalary').textContent = `¥${totalSalary.toLocaleString()}`;
}

function getBaseSalary(experience, menExperience) {
    let base;
    switch (experience) {
        case 1:
            base = 195000;
            break;
        case 2:
            base = 205000;
            break;
        case 3:
            base = 215000;
            break;
        case 4:
            base = 225000;
            break;
        default:
            base = 0;
    }
    if (experience >= 4 && menExperience >= 2) {
        base = Math.min(base, 260000);
    } else {
        base = Math.min(base, 240000);
    }
    return base;
}

function getQualificationAllowance(qualification) {
    return qualification === 2 ? 5000 : 0;
}

function getLocationAllowance(location) {
    switch (location) {
        case 1:
            return 25000;
        case 2:
            return 20000;
        case 3:
            return 15000;
        case 4:
            return 10000;
        case 5:
            return 5000;
        case 6:
            return 5000;
        default:
            return 0;
    }
}

function getPersonalAllowance(skillScores) {
    const totalScore = skillScores.reduce((sum, score) => sum + score, 0);

    if (totalScore >= 55) {
        return 35000;
    } else if (totalScore >= 50) {
        return 30000;
    } else if (totalScore >= 45) {
        return 25000;
    } else if (totalScore >= 40) {
        return 20000;
    } else if (totalScore >= 35) {
        return 15000;
    } else if (totalScore >= 30) {
        return 10000;
    } else if (totalScore >= 25) {
        return 5000;
    } else {
        return 0;
    }
}

// script.js

function calculateSalary() {
    const experience = parseInt(document.getElementById('experience').value);
    const qualification = parseInt(document.getElementById('qualification').value);
    const location = parseInt(document.getElementById('location').value);
    const menExperience = parseInt(document.getElementById('menExperience').value);

    const skillScores = [
        { score: parseInt(document.getElementById('understanding').value), weight: 0.1 },
        { score: parseInt(document.getElementById('proposals').value), weight: 0.1 },
        { score: parseInt(document.getElementById('conversation').value), weight: 0.1 },
        { score: parseInt(document.getElementById('counseling').value), weight: 0.1 },
        { score: parseInt(document.getElementById('attitude').value), weight: 0.1 },
        { score: parseInt(document.getElementById('feedback').value), weight: 0.1 },
        { score: parseInt(document.getElementById('satisfaction').value), weight: 0.1 },
        { score: parseInt(document.getElementById('cutting').value), weight: 0.4 },
        { score: parseInt(document.getElementById('efficiency').value), weight: 0.4 },
        { score: parseInt(document.getElementById('requests').value), weight: 0.4 },
        { score: parseInt(document.getElementById('clipper').value), weight: 0.4 },
        { score: parseInt(document.getElementById('fade').value), weight: 0.4 }
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
    const weightedScore = skillScores.reduce((sum, { score, weight }) => sum + (score * weight), 0);

    if (weightedScore >= 4.0) {
        return 35000;
    } else if (weightedScore >= 3.6) {
        return 30000;
    } else if (weightedScore >= 3.2) {
        return 25000;
    } else if (weightedScore >= 2.8) {
        return 20000;
    } else if (weightedScore >= 2.4) {
        return 15000;
    } else if (weightedScore >= 2.0) {
        return 10000;
    } else if (weightedScore >= 1.6) {
        return 5000;
    } else {
        return 0;
    }
}

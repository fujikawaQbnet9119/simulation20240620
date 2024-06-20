// script.js

function calculateSalary() {
    const experience = parseInt(document.getElementById('experience').value);
    const qualification = parseInt(document.getElementById('qualification').value);
    const location = parseInt(document.getElementById('location').value);
    const menExperience = parseInt(document.getElementById('menExperience').value);

    const skillScores = [
        { score: parseInt(document.getElementById('understanding').value), weight: 10 },
        { score: parseInt(document.getElementById('proposals').value), weight: 10 },
        { score: parseInt(document.getElementById('conversation').value), weight: 10 },
        { score: parseInt(document.getElementById('counseling').value), weight: 10 },
        { score: parseInt(document.getElementById('attitude').value), weight: 10 },
        { score: parseInt(document.getElementById('feedback').value), weight: 10 },
        { score: parseInt(document.getElementById('satisfaction').value), weight: 10 },
        { score: parseInt(document.getElementById('cutting').value), weight: 40 },
        { score: parseInt(document.getElementById('efficiency').value), weight: 40 },
        { score: parseInt(document.getElementById('requests').value), weight: 40 },
        { score: parseInt(document.getElementById('clipper').value), weight: 40 },
        { score: parseInt(document.getElementById('fade').value), weight: 40 }
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
    const totalWeight = 100;
    const weightedScore = skillScores.reduce((sum, { score, weight }) => sum + (score * weight), 0) / totalWeight;

    if (weightedScore >= 90) {
        return 35000;
    } else if (weightedScore >= 80) {
        return 30000;
    } else if (weightedScore >= 70) {
        return 25000;
    } else if (weightedScore >= 60) {
        return 20000;
    } else if (weightedScore >= 50) {
        return 15000;
    } else if (weightedScore >= 40) {
        return 10000;
    } else if (weightedScore >= 30) {
        return 5000;
    } else {
        return 0;
    }
}

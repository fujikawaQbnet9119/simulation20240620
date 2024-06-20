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

    const baseSalary = getBaseSalary(experience);
    const qualificationAllowance = getQualificationAllowance(qualification);
    const locationAllowance = getLocationAllowance(location);
    const personalAllowance = getPersonalAllowance(skillScores);

    // 基本給額（ベース給 + 属人給）
    let basicSalary = baseSalary + personalAllowance;

    // 基本給額が制限を超えないように調整
    if (experience >= 4 && menExperience >= 2) {
        basicSalary = Math.min(basicSalary, 260000);
    } else {
        basicSalary = Math.min(basicSalary, 240000);
    }

    // 総額（基本給額 + 資格手当 + 地域手当）
    const totalSalary = basicSalary + qualificationAllowance + locationAllowance;

    document.getElementById('baseSalary').textContent = `¥${basicSalary.toLocaleString()}`;
    document.getElementById('locationAllowance').textContent = `¥${locationAllowance.toLocaleString()}`;
    document.getElementById('qualificationAllowance').textContent = `¥${qualificationAllowance.toLocaleString()}`;
    document.getElementById('personalAllowance').textContent = `¥${personalAllowance.toLocaleString()}`;
    document.getElementById('totalSalary').textContent = `¥${totalSalary.toLocaleString()}`;
}

function getBaseSalary(experience) {
    switch (experience) {
        case 1:
            return 195000;
        case 2:
            return 205000;
        case 3:
            return 215000;
        case 4:
            return 225000;
        default:
            return 0;
    }
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
    const maxScores = {
        counseling: 20,
        customerService: 15,
        cuttingSkill: 15,
        menCutExperience: 10
    };

    const weights = {
        counseling: 0.15,
        customerService: 0.15,
        cuttingSkill: 0.3,
        menCutExperience: 0.4
    };

    const totalScore = (
        (skillScores.slice(0, 4).reduce((sum, score) => sum + score, 0) / maxScores.counseling) * weights.counseling +
        (skillScores.slice(4, 7).reduce((sum, score) => sum + score, 0) / maxScores.customerService) * weights.customerService +
        (skillScores.slice(7, 10).reduce((sum, score) => sum + score, 0) / maxScores.cuttingSkill) * weights.cuttingSkill +
        (skillScores.slice(10, 12).reduce((sum, score) => sum + score, 0) / maxScores.menCutExperience) * weights.menCutExperience
    ) * 100;

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

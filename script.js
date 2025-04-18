document.addEventListener('DOMContentLoaded', function() {
    const predictBtn = document.getElementById('predictBtn');
    const resetBtn = document.getElementById('resetBtn');
    const inputSection = document.querySelector('.input-section');
    const resultSection = document.querySelector('.result-section');
    
    const lastPeriodInput = document.getElementById('lastPeriod');
    const upcomingPeriodInput = document.getElementById('upcomingPeriod');
    const lastResultRadios = document.getElementsByName('lastResult');
    
    const resultText = document.getElementById('resultText');
    const colorText = document.getElementById('colorText');
    const bigSmallResult = document.getElementById('bigSmallResult');
    const colorResult = document.getElementById('colorResult');
    
    const upcomingDisplay = document.getElementById('upcomingDisplay');
    const lastDisplay = document.getElementById('lastDisplay');
    const lastResultDisplay = document.getElementById('lastResultDisplay');
    const finalDiff = document.getElementById('finalDiff');
    
    predictBtn.addEventListener('click', function() {
        // Validate inputs
        if (!lastPeriodInput.value || !upcomingPeriodInput.value) {
            alert('Please enter both period numbers');
            return;
        }
        
        // Get input values
        const lastPeriod = parseInt(lastPeriodInput.value);
        const upcomingPeriod = parseInt(upcomingPeriodInput.value);
        const lastResult = document.querySelector('input[name="lastResult"]:checked').value;
        
        // Calculate differences
        const diff1 = upcomingPeriod - lastPeriod;
        const lastResultValue = lastResult === 'big' ? 5 : 4; // Assuming big=5, small=4 as per your logic
        const finalDifference = diff1 - lastResultValue;
        
        // Determine BIG/SMALL
        const isBig = finalDifference >= 5;
        const result = isBig ? 'BIG' : 'SMALL';
        
        // Determine color
        const lastDigit = Math.abs(finalDifference) % 10;
        const isOdd = lastDigit % 2 !== 0;
        const color = isOdd ? 'GREEN' : 'RED';
        
        // Update display
        upcomingDisplay.textContent = upcomingPeriod;
        lastDisplay.textContent = lastPeriod;
        lastResultDisplay.textContent = lastResultValue;
        finalDiff.textContent = finalDifference;
        
        resultText.textContent = result;
        colorText.textContent = color;
        
        // Apply styling
        bigSmallResult.className = 'result-box ' + (isBig ? 'big' : 'small');
        colorResult.className = 'result-box ' + (isOdd ? 'green' : 'red');
        
        // Show result section
        inputSection.classList.add('hidden');
        resultSection.classList.remove('hidden');
    });
    
    resetBtn.addEventListener('click', function() {
        // Reset form
        lastPeriodInput.value = '';
        upcomingPeriodInput.value = '';
        document.querySelector('input[name="lastResult"][value="big"]').checked = true;
        
        // Hide result section
        resultSection.classList.add('hidden');
        inputSection.classList.remove('hidden');
        
        // Scroll to top
        window.scrollTo(0, 0);
    });
});

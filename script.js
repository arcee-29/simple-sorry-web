let pokesLeft = 5;

// Elements
const emojiWake = document.getElementById('emoji-wake');
const statusText = document.getElementById('status-text');

// Scenes
const sceneWake = document.getElementById('scene-wake');
const sceneApology = document.getElementById('scene-apology');
const sceneAsk1 = document.getElementById('scene-ask1');
const sceneAsk2 = document.getElementById('scene-ask2');
const sceneSad = document.getElementById('scene-sad');
const sceneHappy = document.getElementById('scene-happy');
const sceneFinal = document.getElementById('scene-final'); // Ito yung idinagdag natin

// Function para sa paglipat-lipat ng Scene
function showScene(targetScene) {
    const allScenes = [sceneWake, sceneApology, sceneAsk1, sceneAsk2, sceneSad, sceneHappy, sceneFinal];
    allScenes.forEach(scene => scene.classList.add('hidden'));
    targetScene.classList.remove('hidden');
}

// 1. Wake Up Mini-Game Logic
emojiWake.addEventListener('click', () => {
    pokesLeft--;

    if (pokesLeft === 4) {
        emojiWake.textContent = "😪";
        statusText.textContent = "Hmm... 5 minutes pa po...";
    } else if (pokesLeft === 3) {
        emojiWake.textContent = "🥱";
        statusText.textContent = "Wait lang po, inaantok pako ihh...";
    } else if (pokesLeft === 2) {
        emojiWake.textContent = "😵‍💫";
        statusText.textContent = "Ihhh... ang sarap papo matulog...";
    } else if (pokesLeft === 1) {
        emojiWake.textContent = "😲";
        statusText.textContent = "AYYY Elaa, ikaw palaa! huhu";
    } else if (pokesLeft === 0) {
        showScene(sceneApology);
    }
});

// 2. Scene 1 (Apology) Buttons
document.getElementById('btn-s1-yes').addEventListener('click', () => showScene(sceneHappy));
document.getElementById('btn-s1-no').addEventListener('click', () => showScene(sceneAsk1));

// 3. Scene 2 (Ayaw mo ba ako patawarin?) Buttons
document.getElementById('btn-s2-yes').addEventListener('click', () => showScene(sceneHappy));
document.getElementById('btn-s2-no').addEventListener('click', () => showScene(sceneAsk2));

// 4. Scene 3 (Sure ka na ba talaga?) Buttons
document.getElementById('btn-s3-yes').addEventListener('click', () => showScene(sceneSad));
document.getElementById('btn-s3-no').addEventListener('click', () => showScene(sceneHappy));

// 5. Loop Button (Mula Sad Scene babalik sa Apology Scene)
document.getElementById('btn-loop').addEventListener('click', () => {
    showScene(sceneApology);
});

// 6. Final Message Button (Mula sa Happy Scene papuntang Final Scene)
document.getElementById('btn-next-final').addEventListener('click', () => {
    showScene(sceneFinal);
});
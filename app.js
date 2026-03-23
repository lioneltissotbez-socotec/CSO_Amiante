// Gestion de l'interface et génération Excel

// État de l'application
let currentTab = 'repérages';
let filters = { C: true, R: true, E: true, X: true };

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    updateStats();
    attachEventListeners();
});

// Affichage du contenu
function renderContent() {
    // Onglet Repérages
    const reperagesContainer = document.getElementById('content-repérages');
    reperagesContainer.innerHTML = generateHTMLForData(analyseData.reperages);
    
    // Onglet EVAT (déjà géré dans le HTML)
}

// Génération HTML pour les sections
function generateHTMLForData(data) {
    let html = '';
    let currentSection = '';
    let currentSubsection = '';
    
    data.forEach(block => {
        // Nouvelle section
        if (block.section !== currentSection) {
            if (currentSection !== '') html += '</div>'; // Fermer section précédente
            html += `
                <div class="section">
                    <h2 class="section-title">${block.section}</h2>
            `;
            currentSection = block.section;
            currentSubsection = '';
        }
        
        // Nouvelle sous-section
        if (block.subsection !== currentSubsection) {
            html += `<h3 class="subsection-title">${block.subsection}</h3>`;
            currentSubsection = block.subsection;
        }
        
        // Items
        block.items.forEach(item => {
            html += `
                <div class="eval-item" data-eval="${item.evaluation}">
                    <div class="eval-header">
                        <span class="eval-code">${item.code}</span>
                        <span class="eval-badge badge-${item.evaluation}">${item.evaluation}</span>
                    </div>
                    <div class="eval-description">${item.description}</div>
                    <div class="eval-observation">
                        <strong>📋 Observation :</strong> ${item.observation}
                    </div>
                    ${item.action ? `
                        <div class="eval-action">
                            <strong>⚠️ Action recommandée :</strong> ${item.action}
                        </div>
                    ` : ''}
                </div>
            `;
        });
    });
    
    html += '</div>'; // Fermer dernière section
    return html;
}

// Calcul des statistiques
function updateStats() {
    const stats = { C: 0, R: 0, E: 0, X: 0 };
    
    // Compter les évaluations
    analyseData.reperages.forEach(block => {
        block.items.forEach(item => {
            stats[item.evaluation]++;
        });
    });
    
    // Afficher
    document.getElementById('stat-c').textContent = stats.C;
    document.getElementById('stat-r').textContent = stats.R;
    document.getElementById('stat-e').textContent = stats.E;
    document.getElementById('stat-x').textContent = stats.X;
}

// Gestion des événements
function attachEventListeners() {
    // Onglets
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            switchTab(tab);
        });
    });
    
    // Filtres
    ['C', 'R', 'E', 'X'].forEach(type => {
        document.getElementById(`filter-${type.toLowerCase()}`).addEventListener('change', (e) => {
            filters[type] = e.target.checked;
            applyFilters();
        });
    });
    
    // Export Excel
    document.getElementById('btn-export').addEventListener('click', generateExcel);
}

// Changement d'onglet
function switchTab(tab) {
    currentTab = tab;
    
    // Boutons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    
    // Contenu
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === `tab-${tab}`);
    });
}

// Application des filtres
function applyFilters() {
    document.querySelectorAll('.eval-item').forEach(item => {
        const eval = item.dataset.eval;
        item.classList.toggle('hidden', !filters[eval]);
    });
}

// ========================================
// GÉNÉRATION EXCEL avec SheetJS
// ========================================

function generateExcel() {
    const workbook = XLSX.utils.book_new();
    
    // ONGLET 1 : Amiante-Repérages
    const wsReperages = createReperagesSheet();
    XLSX.utils.book_append_sheet(workbook, wsReperages, "Amiante-Repérages");
    
    // ONGLET 2 : Amiante-EVAT
    const wsEVAT = createEVATSheet();
    XLSX.utils.book_append_sheet(workbook, wsEVAT, "Amiante-EVAT");
    
    // Téléchargement
    XLSX.writeFile(workbook, `Analyse_Amiante_${analyseData.metadata.reference.replace(/\s+/g, '_')}.xlsx`);
}

// Création feuille Repérages
function createReperagesSheet() {
    const data = [];
    
    // En-tête
    data.push(['ANALYSE RAPPORT AMIANTE - GRILLE DE SURVEILLANCE SOCOTEC']);
    data.push(['Onglet 1 : Amiante-Repérages']);
    data.push([]);
    data.push(['Personne évaluée :', analyseData.metadata.personne]);
    data.push(['Références rapport :', analyseData.metadata.reference]);
    data.push(['Évaluateur :', analyseData.metadata.evaluateur]);
    data.push([]);
    
    // Colonnes
    data.push(['Code', 'Libellé', 'C', 'R', 'E', 'X', 'Observation', 'Action recommandée']);
    
    // Données
    analyseData.reperages.forEach(block => {
        // Section
        data.push([block.section]);
        // Sous-section
        data.push(['', block.subsection]);
        
        // Items
        block.items.forEach(item => {
            data.push([
                item.code,
                item.description,
                item.evaluation === 'C' ? 'X' : '',
                item.evaluation === 'R' ? 'X' : '',
                item.evaluation === 'E' ? 'X' : '',
                item.evaluation === 'X' ? 'X' : '',
                item.observation,
                item.action
            ]);
        });
    });
    
    // Synthèse
    const stats = { C: 0, R: 0, E: 0, X: 0 };
    analyseData.reperages.forEach(block => {
        block.items.forEach(item => stats[item.evaluation]++);
    });
    
    data.push([]);
    data.push(['SYNTHÈSE']);
    data.push(['Total points évalués', Object.values(stats).reduce((a,b) => a+b, 0)]);
    data.push(['Conformes (C)', stats.C]);
    data.push(['Remarques (R)', stats.R]);
    data.push(['Écarts (E)', stats.E]);
    data.push(['Sans objet (X)', stats.X]);
    
    const ws = XLSX.utils.aoa_to_sheet(data);
    
    // Largeur des colonnes
    ws['!cols'] = [
        {wch: 10},  // Code
        {wch: 60},  // Libellé
        {wch: 5},   // C
        {wch: 5},   // R
        {wch: 5},   // E
        {wch: 5},   // X
        {wch: 50},  // Observation
        {wch: 50}   // Action
    ];
    
    return ws;
}

// Création feuille EVAT
function createEVATSheet() {
    const data = [];
    
    // En-tête
    data.push(['ANALYSE RAPPORT AMIANTE - GRILLE DE SURVEILLANCE SOCOTEC']);
    data.push(['Onglet 2 : Amiante-EVAT']);
    data.push([]);
    data.push(['Personne évaluée :', analyseData.metadata.personne]);
    data.push(['Références rapport :', analyseData.metadata.reference]);
    data.push(['Évaluateur :', analyseData.metadata.evaluateur]);
    data.push([]);
    data.push(['NOTE : Le rapport analysé est un repérage avant travaux, non un EVAT. Tous les points sont X (Sans objet).']);
    data.push([]);
    
    // Colonnes
    data.push(['Code', 'Libellé', 'C', 'R', 'E', 'X', 'Observation', 'Action recommandée']);
    
    // Données
    analyseData.evat.forEach(block => {
        data.push([block.section]);
        data.push(['', block.subsection]);
        
        block.items.forEach(item => {
            data.push([
                item.code,
                item.description,
                '',
                '',
                '',
                'X',
                item.observation,
                ''
            ]);
        });
    });
    
    const ws = XLSX.utils.aoa_to_sheet(data);
    
    ws['!cols'] = [
        {wch: 10},
        {wch: 60},
        {wch: 5},
        {wch: 5},
        {wch: 5},
        {wch: 5},
        {wch: 50},
        {wch: 50}
    ];
    
    return ws;
}

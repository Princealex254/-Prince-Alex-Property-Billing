// ============================================================
// Prince Alex | Property Management - Main Application
// ============================================================

// --- Firebase Configuration ---
const firebaseConfig = {
    apiKey: "AIzaSyC0TdBjLeGimGoYZwLxzC4fQLPBdSzrT0A",
    authDomain: "universityweb-19e1e.firebaseapp.com",
    projectId: "universityweb-19e1e",
    storageBucket: "universityweb-19e1e.firebasestorage.app",
    messagingSenderId: "401942926589",
    appId: "1:401942926589:web:c98e8d71ae6bd396775a94"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const getCollectionRef = (collectionName) => db.collection(collectionName);

// ============================================================
// ICONS
// ============================================================
const icons = {
    Home: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    Users: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    Building: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9.5 16h5"/><path d="M9.5 12h5"/><path d="M9.5 8h5"/><path d="M12 22V2"/></svg>`,
    Receipt: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2h-2.5a2 2 0 0 1-2-2H6.5a2 2 0 0 1-2 2H4Z"/><path d="M18 6H8"/><path d="M18 10H8"/><path d="M18 14H8"/><path d="M18 18H8"/></svg>`,
    PlusCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-circle"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`,
    Edit: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg>`,
    Trash2: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>`,
    LogOut: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="17 16 22 12 17 8"/><line x1="22" x2="11" y1="12" y2="12"/></svg>`,
    FileText: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
    Calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
    HomeIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    Wallet: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 0 2-2v-3"/><path d="M22 7V4a1 1 0 0 0-1-1H3a2 2 0 0 0 0 4h18a1 1 0 0 0 1-1Z"/></svg>`,
    Search: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    DollarSign: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    Menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
    X: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    Wrench: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    AlertTriangle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
    CheckCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,
    Clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`,
    Download: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
    Upload: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17,8 12,3 7,8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`,
    Settings: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
    BarChart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>`,
    Bell: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
    Mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    Lock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    History: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-history"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
    Phone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
};

// ============================================================
// CONSTANTS
// ============================================================
const houseTypes = ['Apartment', 'Bungalow', 'Mansionette', 'Commercial Space', 'Shop', 'Studio', 'Single Room', 'Self-Contained'];
const leaseTypes = ['Monthly', 'Quarterly', 'Semi-Annual', 'Annual'];
const maintenanceCategories = ['Plumbing', 'Electrical', 'Structural', 'Security', 'Cleaning', 'Landscaping', 'HVAC', 'Other'];
const expenseCategories = ['Maintenance', 'Utilities', 'Insurance', 'Taxes', 'Legal', 'Marketing', 'Administrative', 'Repairs', 'Renovations'];
const notificationTypes = ['Payment Due', 'Lease Expiry', 'Maintenance Request', 'Payment Received', 'System Alert'];
const documentTypes = ['Lease Agreement', 'ID Copy', 'Payment Receipt', 'Maintenance Report', 'Insurance Document', 'Other'];
const SECURITY_DEPOSIT_MULTIPLIER = 2;
const PENALTY_RATE = 0.05;
const WATER_METER_READING_INTERVAL = 30;
let globalSettings = {
    waterPricePerUnit: 200,
    garbageCollectionFee: 150
};

// ============================================================
// GLOBAL STATE
// ============================================================
let user = null;
let userProfile = null;
let userId = null;
let currentPage = 'dashboard';
let properties = [];
let tenants = [];
let bills = [];
let payments = [];
let leases = [];
let maintenanceRequests = [];
let expenses = [];
let notifications = [];
let documents = [];
let waterMeterReadings = [];
let activityLogs = [];
let activeTab = 'summary';
let billingTenantSearchQuery = '';
let selectedPropertyForBillingFilter = '';
let tenantSearchQuery = '';
let billingHistoryFilterMonth = new Date().toISOString().substring(0, 7);
let selectedPropertyForFinanceFilter = '';
let isSidebarOpen = false;
let propertyTenantSearchQueries = {};
let isDarkMode = false;
let charts = {};
let activityLogSearchQuery = '';
let activityLogPropertyFilter = '';
let currentView = 'dashboard';

// ============================================================
// UTILITY FUNCTIONS
// ============================================================
function showLoading(containerId, text = 'Loading...') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = `
        <div class="loading-container">
            <div class="spinner"></div>
            <div class="loading-text">${text}</div>
            <div class="loading-dots mt-2">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
}

function setButtonLoading(button, isLoading, originalText = '') {
    if (isLoading) {
        button.disabled = true;
        button.dataset.originalText = button.innerHTML;
        button.innerHTML = `
            <div class="flex items-center justify-center">
                <div class="spinner-sm mr-2"></div>
                <span>Loading...</span>
            </div>
        `;
        button.classList.add('opacity-75', 'cursor-not-allowed');
    } else {
        button.disabled = false;
        button.innerHTML = button.dataset.originalText || originalText;
        button.classList.remove('opacity-75', 'cursor-not-allowed');
    }
}

function showNotification(message, type = 'info', duration = 10000) {
    const existing = document.querySelector('.notification-container');
    if (existing) existing.remove();

    const container = document.createElement('div');
    container.className = 'notification-container fixed top-0 left-0 right-0 flex justify-center p-4 z-[100] pointer-events-none';

    let bgColor, icon, iconColor;
    switch (type) {
        case 'success':
            bgColor = 'bg-green-500 dark:bg-green-600';
            icon = icons.CheckCircle;
            iconColor = 'text-green-100';
            break;
        case 'error':
            bgColor = 'bg-red-500 dark:bg-red-600';
            icon = icons.AlertTriangle;
            iconColor = 'text-red-100';
            break;
        default:
            bgColor = 'bg-blue-500 dark:bg-blue-600';
            icon = icons.Bell;
            iconColor = 'text-blue-100';
            break;
    }

    const notification = document.createElement('div');
    notification.className = `notification pointer-events-auto flex items-center space-x-4 ${bgColor} text-white font-semibold px-6 py-4 rounded-2xl shadow-premium-lg max-w-md w-full border-2 border-white/30`;
    notification.innerHTML = `
        <div class="flex-shrink-0 ${iconColor}">${icon}</div>
        <div class="flex-grow">${message}</div>
        <div class="absolute bottom-0 left-0 h-1 bg-white/50 notification-progress" style="animation-duration: ${duration}ms;"></div>
    `;
    container.appendChild(notification);
    document.body.appendChild(container);
    setTimeout(() => notification.classList.add('show'), 50);
    setTimeout(() => { notification.classList.remove('show'); setTimeout(() => container.remove(), 500); }, duration);
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const body = document.getElementById('body');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    if (isDarkMode) {
        body.classList.add('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        body.classList.remove('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
    localStorage.setItem('darkMode', isDarkMode);
    // Only re-render dashboard if user is logged in
    if (user && auth.currentUser) {
        renderDashboardPage();
    }
}

function initializeDarkMode() {
    if (localStorage.getItem('darkMode') === 'true') toggleDarkMode();
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 2 }).format(amount);
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' });
}

function createChart(canvasId, config) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;
    return new Chart(canvas.getContext('2d'), config);
}

function getFriendlyErrorMessage(error) {
    console.error("Firebase Error:", error.code, error.message);
    switch (error.code) {
        case 'auth/user-not-found': return 'No account found with this email.';
        case 'auth/invalid-credential': case 'auth/wrong-password': return 'Invalid credentials. Please check your email and password.';
        case 'auth/invalid-email': return 'The email address is not valid.';
        case 'auth/email-already-in-use': return 'An account with this email already exists.';
        case 'auth/weak-password': return 'Password must be at least 6 characters.';
        case 'auth/too-many-requests': return 'Too many failed attempts. Try again later.';
        case 'permission-denied': return 'You do not have permission.';
        default: return 'An unexpected error occurred. Check your connection and try again.';
    }
}

function generateUniqueId() {
    return db.collection('whatever').doc().id;
}

function generateBillReference() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `BILL-${year}${month}-${random}`;
}

// ============================================================
// FIRESTORE DATA FUNCTIONS
// ============================================================
async function saveData(collectionName, data) {
    if (!auth.currentUser) return;
    try {
        const docRef = await getCollectionRef(collectionName).add({ ...data, uid: auth.currentUser.uid, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
        const savedDoc = await docRef.get();
        return { id: savedDoc.id, ...savedDoc.data() };
    } catch (error) {
        console.error(`Error saving to ${collectionName}:`, error);
        showNotification(getFriendlyErrorMessage(error), 'error');
    }
}
 
async function updateData(collectionName, docId, data) {
    if (!auth.currentUser) return;
    try {
        await getCollectionRef(collectionName).doc(docId).update({ ...data, updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
    } catch (error) {
        console.error(`Error updating ${collectionName}:`, error);
        showNotification(getFriendlyErrorMessage(error), 'error');
    }
}

async function deleteData(collectionName, docId) {
    if (!auth.currentUser) return;
    try {
        await getCollectionRef(collectionName).doc(docId).delete();
    } catch (error) {
        console.error(`Error deleting from ${collectionName}:`, error);
        showNotification(getFriendlyErrorMessage(error), 'error');
    }
}

async function loadAllData() {
    if (!auth.currentUser) { return; }
    const assignedProperties = userProfile?.role === 'admin' ? userProfile.assignedProperties : null;
    if (userProfile?.role === 'admin' && (!assignedProperties || assignedProperties.length === 0)) {
        properties = tenants = bills = payments = leases = maintenanceRequests = expenses = notifications = documents = waterMeterReadings = activityLogs = [];
        return;
    }
    // For admins, we only fetch properties initially to know which other documents to get.
    // Owners can fetch everything. Admins should not load all users.
    const collectionsToLoad = userProfile?.role === 'owner' 
        ? ['properties', 'tenants', 'bills', 'payments', 'leases', 'maintenanceRequests', 'expenses', 'notifications', 'documents', 'waterMeterReadings', 'activityLogs', 'users']
        : ['properties'];

    const promises = collectionsToLoad.map(async (collectionName) => {
        let query = getCollectionRef(collectionName);
        const snapshot = await query.get();
        return { [collectionName]: snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) };
    });
    try {
        const results = await Promise.all(promises);
        const allData = Object.assign({}, ...results);

        // Filter properties based on assignment for admins
        properties = (allData.properties || []).filter(p => userProfile?.role === 'owner' || (userProfile.assignedProperties || []).includes(p.id));
        const accessiblePropertyIds = properties.map(p => p.id);

        if (userProfile?.role === 'admin') {
            // If admin, we need to fetch related data after filtering properties
            const relatedCollections = ['tenants', 'bills', 'payments', 'leases', 'maintenanceRequests', 'expenses', 'notifications', 'documents', 'waterMeterReadings', 'activityLogs'];
            const relatedPromises = relatedCollections.map(async (collectionName) => {
                if (accessiblePropertyIds.length === 0) return { [collectionName]: [] };
                const snapshot = await getCollectionRef(collectionName).where('propertyId', 'in', accessiblePropertyIds).get();
                return { [collectionName]: snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) };
            });
            const relatedResults = await Promise.all(relatedPromises);
            Object.assign(allData, ...relatedResults);
        }

        // Assign all data to global state
        tenants = (allData.tenants || []).filter(t => accessiblePropertyIds.includes(t.propertyId));
        bills = (allData.bills || []).filter(b => accessiblePropertyIds.includes(b.propertyId));
        payments = (allData.payments || []).filter(p => accessiblePropertyIds.includes(p.propertyId));
        leases = (allData.leases || []).filter(l => accessiblePropertyIds.includes(l.propertyId));
        maintenanceRequests = (allData.maintenanceRequests || []).filter(m => accessiblePropertyIds.includes(m.propertyId));
        expenses = (allData.expenses || []).filter(e => accessiblePropertyIds.includes(e.propertyId));
        notifications = (allData.notifications || []).filter(n => !n.propertyId || accessiblePropertyIds.includes(n.propertyId));
        documents = (allData.documents || []).filter(d => accessiblePropertyIds.includes(d.propertyId));
        waterMeterReadings = (allData.waterMeterReadings || []).filter(w => accessiblePropertyIds.includes(w.propertyId));
        activityLogs = (allData.activityLogs || []).filter(log => {
            // For admins, only show activity logs related to their assigned properties
            if (userProfile?.role === 'admin') {
                // Activity log entries may have propertyId directly, or entityType/entityId for properties
                if (log.propertyId) return accessiblePropertyIds.includes(log.propertyId);
                if (log.entityType === 'property' && log.entityId) return accessiblePropertyIds.includes(log.entityId);
                // For other entity types (tenant, bill, etc.), check if the entity belongs to an accessible property
                // If we can't determine, exclude for admins (security: don't show unrelated logs)
                return false;
            }
            return true;
        }).sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
    } catch (error) {
        console.error("Error loading data:", error);
        showNotification("Couldn't load your data. Check your connection and refresh.", 'error');
        properties = tenants = bills = payments = leases = maintenanceRequests = expenses = notifications = documents = waterMeterReadings = activityLogs = [];
    }
}

// ============================================================
// ACTIVITY LOGGING
// ============================================================
async function logActivity(action, details, entityType = null, entityId = null, propertyId = null) {
    if (!auth.currentUser) return;

    const logEntry = {
        userId: auth.currentUser.uid,
        userName: userProfile?.email || auth.currentUser.email,
        action, // e.g., 'create_tenant'
        details, // e.g., 'Created new tenant John Doe for property Apollo Heights'
        entityType,
        entityId,
        propertyId, // Store propertyId for role-based filtering
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    try {
        // We don't wait for this to complete to avoid blocking the UI
        getCollectionRef('activityLogs').add(logEntry);
    } catch (error) {
        console.error("Failed to log activity:", error);
        // Don't show a user-facing notification for this, it's a background task.
    }
}


// ============================================================
// MODAL FUNCTIONS
// ============================================================
function showModal(title, content, type = 'alert', onConfirm = null) {
    const appDiv = document.getElementById('app');
    if (!appDiv) return;

    let modalOverlay = document.querySelector('.modal-overlay');
    if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-opacity duration-300';
        appDiv.appendChild(modalOverlay);
    }

    const contentStr = typeof content === 'string' ? `<div class="p-6">${content}</div>` : '';

    modalOverlay.innerHTML = `
        <div class="modal-content bg-white/95 dark:bg-ink-900/95 backdrop-blur-2xl rounded-3xl shadow-premium-lg w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden border border-white/20 dark:border-ink-700/50 transition-all duration-300 scale-95 opacity-0">
            <div class="modal-header-gradient flex justify-between items-center p-6 flex-shrink-0">
                <h3 class="text-xl brand-serif font-semibold text-white">${title}</h3>
                <button class="text-white hover:text-ink-200 transition duration-200 modal-close-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            <div class="modal-body p-6 overflow-y-auto custom-scrollbar">${contentStr}</div>
            <div class="p-6 border-t border-ink-200/50 dark:border-ink-700/50 flex justify-end gap-3 bg-ink-50/50 dark:bg-ink-900/50 flex-shrink-0">
                ${type === 'confirm' ? `
                    <button class="px-6 py-3 rounded-xl font-semibold bg-ink-200 dark:bg-ink-600 text-ink-800 dark:text-ink-200 hover:bg-ink-300 dark:hover:bg-ink-500 transition-all duration-300 modal-cancel-btn">Cancel</button>
                    <button class="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-brass-600 to-brass-700 text-white hover:shadow-premium hover:shadow-brass-500/30 hover:-translate-y-0.5 transition-all duration-300 modal-confirm-btn">Confirm</button>
                ` : `
                    <button class="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-brass-600 to-brass-700 text-white hover:shadow-premium hover:shadow-brass-500/30 hover:-translate-y-0.5 transition-all duration-300 modal-close-btn">OK</button>
                `}
            </div>
        </div>
    `;

    setTimeout(() => {
        modalOverlay.classList.remove('opacity-0');
        const mc = modalOverlay.querySelector('.modal-content');
        if (mc) mc.classList.remove('scale-95', 'opacity-0');
    }, 10);

    if (typeof content !== 'string') {
        const mb = modalOverlay.querySelector('.modal-body');
        if (mb) { mb.innerHTML = ''; mb.appendChild(content); }
    }

    const closeModal = () => {
        modalOverlay.classList.add('opacity-0');
        const mc = modalOverlay.querySelector('.modal-content');
        if (mc) mc.classList.add('scale-95', 'opacity-0');
        setTimeout(() => modalOverlay.remove(), 300);
    };

    modalOverlay.querySelectorAll('.modal-close-btn').forEach(btn => btn.addEventListener('click', closeModal));
    const cancelBtn = modalOverlay.querySelector('.modal-cancel-btn');
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    const confirmBtn = modalOverlay.querySelector('.modal-confirm-btn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => { if (onConfirm) onConfirm(closeModal); closeModal(); });
    }
    return { closeModal, modalElement: modalOverlay };
}

// ============================================================
// RENDER FUNCTIONS - Stat Card
// ============================================================
function renderStatCard(icon, title, value, gradientClass = 'bg-gradient-to-r from-brass-500 to-brass-600') {
    return `
        <div class="glass-panel p-5 rounded-2xl shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-premium-lg">
            <div class="flex items-center space-x-4">
                <div class="p-3.5 rounded-xl ${gradientClass} text-white shadow-sm shrink-0">${icon}</div>
                <div class="min-w-0">
                    <p class="text-ink-500 dark:text-ink-300 text-xs uppercase tracking-wide font-medium truncate">${title}</p>
                    <h3 class="text-xl md:text-2xl font-semibold text-ink-900 dark:text-white mt-0.5 truncate">${value}</h3>
                </div>
            </div>
        </div>
    `;
}

// ============================================================
// AUTH FUNCTIONS
// ============================================================
function renderLoginPage() {
    const appDiv = document.getElementById('app');
    if (!document.getElementById('auth-container')) {
        appDiv.innerHTML = `
            <div id="auth-container" class="relative min-h-screen flex items-center justify-center p-4 overflow-hidden" style="background-color:#0C0D11; background-image: radial-gradient(900px 560px at 14% 8%, rgba(173,127,46,0.16), transparent 60%), radial-gradient(1000px 640px at 88% 92%, rgba(173,127,46,0.10), transparent 60%);">
                <div class="absolute inset-0 opacity-[0.05]" style="background-image: linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px); background-size: 42px 42px;"></div>
                <div class="hidden lg:flex flex-col justify-center absolute left-16 top-0 bottom-0 max-w-sm text-ink-200">
                    <p class="text-sm uppercase tracking-[0.22em] text-brass-300 font-semibold mb-4">Prince Alex Property</p>
                    <h2 class="brand-serif text-5xl text-white leading-tight mb-4">Every unit,<br>every tenant,<br>one ledger.</h2>
                    <p class="text-ink-400 text-base leading-relaxed">Rent, leases, maintenance and reporting for your entire portfolio &mdash; kept in one place, always up to date.</p>
                </div>
                <div class="hidden lg:flex flex-col justify-center absolute right-16 top-0 bottom-0 max-w-sm">
                    <div class="glass-panel p-8 rounded-2xl border border-white/10">
                        <h3 class="text-2xl font-bold text-ink-900 dark:text-white mb-4">Interested in our Property Management?</h3>
                        <p class="text-ink-700 dark:text-ink-200 mb-6">Contact us today and let us help you manage your properties efficiently.</p>
                        <div class="space-y-4">
                            <div class="flex items-start space-x-3">
                                <div class="text-brass-600 dark:text-brass-400 mt-1">${icons.Search}</div>
                                <div>
                                    <p class="text-xs text-ink-600 dark:text-ink-400 uppercase tracking-wider font-semibold">Website</p>
                                    <p class="text-sm text-ink-900 dark:text-white font-medium">www.princealex.digital</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <div class="text-brass-600 dark:text-brass-400 mt-1">${icons.Mail}</div>
                                <div>
                                    <p class="text-xs text-ink-600 dark:text-ink-400 uppercase tracking-wider font-semibold">Email</p>
                                    <p class="text-sm text-ink-900 dark:text-white font-medium">princealexdigital@gmail.com</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <div class="text-brass-600 dark:text-brass-400 mt-1">${icons.Phone}</div>
                                <div>
                                    <p class="text-xs text-ink-600 dark:text-ink-400 uppercase tracking-wider font-semibold">Call</p>
                                    <p class="text-sm text-ink-900 dark:text-white font-medium">0717 384 875</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="auth-card" class="relative w-full max-w-md"></div>
            </div>
        `;
    }
    renderLoginContent();
}

function renderLoginContent() {
    const authCard = document.getElementById('auth-card');
    if (!authCard) return;
    authCard.innerHTML = `
        <div class="w-full max-w-md bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-9 rounded-2xl shadow-premium-lg">
            <div class="flex items-center mb-8">
                <div class="w-11 h-11 rounded-full border border-brass-400/50 bg-ink-800 flex items-center justify-center mr-3.5 shrink-0"><span class="brand-serif text-brass-300 font-semibold text-lg">PA</span></div>
                <div><h1 class="text-base font-semibold text-white leading-tight">Prince Alex Property</h1><p class="text-ink-400 text-xs uppercase tracking-wider">Management System</p></div>
            </div>
            <h2 class="text-3xl brand-serif font-semibold text-white mb-2">Welcome back</h2>
            <p class="text-ink-400 mb-8 text-sm">Sign in to manage your properties.</p>
            <form id="loginForm" class="space-y-5">
                <div class="relative">
                    <label for="email" class="sr-only">Email Address</label>
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-ink-400">${icons.Mail}</div>
                    <input type="email" id="email" name="email" class="w-full pl-12 p-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-ink-500 focus:border-brass-400/60 focus:ring-brass-400/15 focus:ring-4 outline-none transition" placeholder="Email address" required>
                </div>
                <div class="relative">
                    <label for="password" class="sr-only">Password</label>
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-ink-400">${icons.Lock}</div>
                    <input type="password" id="password" name="password" class="w-full pl-12 p-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-ink-500 focus:border-brass-400/60 focus:ring-brass-400/15 focus:ring-4 outline-none transition" placeholder="Password" required>
                </div>
                <div class="flex items-center justify-between"><a href="#" id="forgotPasswordLink" class="text-sm text-brass-300 hover:text-brass-200 hover:underline font-medium">Forgot password?</a></div>
                <button type="submit" class="w-full bg-brass-500 text-ink-900 px-6 py-3.5 rounded-xl font-semibold hover:bg-brass-400 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 shadow-premium"><span>Sign in</span></button>
            </form>
        </div>
    `;
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('forgotPasswordLink').addEventListener('click', handlePasswordResetRequest);
}

function renderPasswordResetContent() {
    const authCard = document.getElementById('auth-card');
    if (!authCard) return;
    authCard.innerHTML = `
        <div class="w-full max-w-md bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-9 rounded-2xl shadow-premium-lg">
            <h2 class="text-3xl brand-serif font-semibold text-white mb-2">Reset password</h2>
            <p class="text-ink-400 mb-8 text-sm">Enter your email to receive a reset link.</p>
            <form id="resetPasswordForm" class="space-y-5">
                <div class="relative">
                    <label for="resetEmail" class="sr-only">Email Address</label>
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-ink-400">${icons.Mail}</div>
                    <input type="email" id="resetEmail" name="resetEmail" class="w-full pl-12 p-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-ink-500 focus:border-brass-400/60 focus:ring-brass-400/15 focus:ring-4 outline-none transition" placeholder="Email address" required>
                </div>
                <button type="submit" class="w-full bg-brass-500 text-ink-900 px-6 py-3.5 rounded-xl font-semibold hover:bg-brass-400 hover:-translate-y-0.5 transition-all duration-300 shadow-premium">Send reset link</button>
            </form>
            <div class="text-center mt-6"><a href="#" id="backToLoginLink" class="text-sm text-brass-300 hover:text-brass-200 hover:underline font-medium">Back to login</a></div>
        </div>
    `;
    document.getElementById('resetPasswordForm').addEventListener('submit', handleSendResetEmail);
    document.getElementById('backToLoginLink').addEventListener('click', (e) => { e.preventDefault(); renderLoginContent(); });
}

function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const submitBtn = e.target.querySelector('button[type="submit"]');
    setButtonLoading(submitBtn, true);
    
    auth.signInWithEmailAndPassword(email, password).then(() => {
        showNotification('Welcome back!', 'success');
    }).catch((error) => {
        if (error.code.startsWith('auth/')) showNotification('Invalid credentials. Please check your email and password.', 'error');
        else showNotification(getFriendlyErrorMessage(error), 'error');
    }).finally(() => {
        setButtonLoading(submitBtn, false);
    }); 
}

function handleLogout() {
    auth.signOut().then(() => {
        showNotification('You have been logged out.', 'info');
        user = null; userProfile = null; userId = null; properties = []; tenants = []; bills = []; payments = []; leases = []; maintenanceRequests = [];
    }).catch((error) => showNotification(getFriendlyErrorMessage(error), 'error'));
}

function handlePasswordResetRequest(e) { e.preventDefault(); renderPasswordResetContent(); }

async function handleSendResetEmail(e) {
    e.preventDefault();
    const email = e.target.resetEmail.value;
    if (!email) { showNotification('Please enter your email address.', 'error'); return; }
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    setButtonLoading(submitBtn, true);
    
    try {
        // Check if email exists in Firestore users collection
        const usersSnapshot = await db.collection('users').where('email', '==', email).get();
        
        if (usersSnapshot.empty) {
            showNotification('No account found with this email address.', 'error');
            return;
        }
        
        // Email exists, send password reset
        await auth.sendPasswordResetEmail(email);
        showNotification('Password reset email sent! Please check your inbox.', 'success');
        renderLoginContent();
    } catch (error) {
        console.error("Password reset error:", error);
        showNotification(getFriendlyErrorMessage(error), 'error');
    } finally {
        setButtonLoading(submitBtn, false);
    }
}

// ============================================================
// APP INITIALIZATION
// ============================================================
async function initializeAppData() {
    document.getElementById('app').innerHTML = `
        <div class="min-h-screen flex items-center justify-center p-4">
            <div class="text-center glass-panel p-8 rounded-2xl">
                <div class="loading-container">
                    <div class="spinner-lg"></div>
                    <div class="loading-text">Loading Your Data</div>
                    <div class="loading-dots mt-2">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    `;
    await loadAllData();
    currentPage = 'dashboard';
    activeTab = 'summary';
    renderDashboardPage();
}

// Auth State Listener
auth.onAuthStateChanged(async (firebaseUser) => {
    if (firebaseUser) {
        const userDoc = await db.collection('users').doc(firebaseUser.uid).get();
        if (userDoc.exists) {
            user = firebaseUser; userId = firebaseUser.uid;
            userProfile = { uid: firebaseUser.uid, ...userDoc.data() };
            await initializeAppData();
        } else {
            userProfile = { uid: firebaseUser.uid, email: firebaseUser.email, role: 'owner', assignedProperties: [] };
            await db.collection('users').doc(firebaseUser.uid).set(userProfile);
            user = firebaseUser; userId = firebaseUser.uid;
            await initializeAppData();
        }
    } else {
        user = null; userProfile = null; userId = null;
        renderLoginPage();
    }
});

// ============================================================
// EXPORT / IMPORT
// ============================================================
function exportData() {
    const data = { properties, tenants, bills, payments, leases, maintenanceRequests, expenses, notifications, documents, exportDate: new Date().toISOString(), version: '1.0' };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    logActivity('export_data', 'User exported all application data.', null, null, null);
    a.href = url;
    a.download = `rental-data-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
    showNotification('Data exported successfully!', 'success');
}

async function importData(file) {
    const importBtn = document.getElementById('importDataBtn');
    setButtonLoading(importBtn, true, importBtn.innerHTML);
    
    const reader = new FileReader();
    reader.onload = async function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.version && data.properties) {
                showNotification('Starting data import...', 'info');
                const dataToImport = { properties: data.properties || [], tenants: data.tenants || [], bills: data.bills || [], payments: data.payments || [], leases: data.leases || [], maintenanceRequests: data.maintenanceRequests || [], expenses: data.expenses || [], notifications: data.notifications || [], documents: data.documents || [] };
                for (const collectionName in dataToImport) {
                    for (const item of dataToImport[collectionName]) await saveData(collectionName, item);
                }
                logActivity('import_data', `User imported data from file: ${file.name}.`, null, null, null);
                await initializeAppData();
                showNotification('Data imported successfully!', 'success');
            } else showNotification('Invalid backup file.', 'error');
        } catch (error) { showNotification('Error importing data: ' + error.message, 'error'); }
        finally {
            setButtonLoading(importBtn, false);
        }
    };
    reader.readAsText(file);
}

// ============================================================
// DASHBOARD PAGE RENDER
// ============================================================
function renderApp() {
    document.getElementById('app').innerHTML = '';
    renderDashboardPage();
}

function renderDashboardPage() {
    const appDiv = document.getElementById('app');
    const userName = user?.displayName || user?.email || "User";
    const totalProperties = properties.length;
    const totalTenants = tenants.length;
    const billsGenerated = bills.length;

    appDiv.innerHTML = `
        <div class="flex h-screen">
            <!-- Sidebar -->
            <aside id="sidebar" class="fixed inset-y-0 left-0 z-40 w-64 sidebar-gradient text-ink-100 flex flex-col p-6 shadow-premium-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:z-auto transition-transform duration-300 ease-in-out custom-scrollbar overflow-y-auto">
                <div class="flex items-center mb-10">
                    <div class="w-11 h-11 rounded-full border border-brass-400/50 bg-ink-800 flex items-center justify-center mr-3 shrink-0"><span class="brand-serif text-brass-300 font-semibold text-lg">PA</span></div>
                    <div><h1 class="brand-serif text-xl font-semibold tracking-tight text-white leading-tight">Prince Alex</h1><p class="text-[11px] uppercase tracking-[0.18em] text-ink-300">Property Management</p></div>
                </div>
                <nav class="flex-grow">
                    <ul class="space-y-1">
                        <li><button id="navSummary" class="relative flex items-center w-full py-3 pl-4 pr-3 rounded-lg transition-all duration-200 ${activeTab === 'summary' ? 'bg-white/[0.06] text-white' : 'text-ink-200 hover:bg-white/[0.04] hover:text-white'} group">${activeTab === 'summary' ? '<span class="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-brass-400"></span>' : ''}<span class="mr-3.5 opacity-80 group-hover:opacity-100 transition-opacity">${icons.Home}</span><span class="text-sm font-medium">Dashboard Overview</span></button></li>
                        <li><button id="navProperties" class="relative flex items-center w-full py-3 pl-4 pr-3 rounded-lg transition-all duration-200 ${activeTab === 'properties' ? 'bg-white/[0.06] text-white' : 'text-ink-200 hover:bg-white/[0.04] hover:text-white'} group">${activeTab === 'properties' ? '<span class="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-brass-400"></span>' : ''}<span class="mr-3.5 opacity-80 group-hover:opacity-100 transition-opacity">${icons.Building}</span><span class="text-sm font-medium">Properties</span></button></li>
                        <li><button id="navTenants" class="relative flex items-center w-full py-3 pl-4 pr-3 rounded-lg transition-all duration-200 ${activeTab === 'tenants' ? 'bg-white/[0.06] text-white' : 'text-ink-200 hover:bg-white/[0.04] hover:text-white'} group">${activeTab === 'tenants' ? '<span class="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-brass-400"></span>' : ''}<span class="mr-3.5 opacity-80 group-hover:opacity-100 transition-opacity">${icons.Users}</span><span class="text-sm font-medium">Tenants</span></button></li>
                        ${userProfile?.role === 'owner' ? `<li><button id="navUserManagement" class="relative flex items-center w-full py-3 pl-4 pr-3 rounded-lg transition-all duration-200 ${activeTab === 'userManagement' ? 'bg-white/[0.06] text-white' : 'text-ink-200 hover:bg-white/[0.04] hover:text-white'} group">${activeTab === 'userManagement' ? '<span class="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-brass-400"></span>' : ''}<span class="mr-3.5 opacity-80 group-hover:opacity-100 transition-opacity">${icons.Users}</span><span class="text-sm font-medium">User Management</span></button></li>` : ''}
                        <li><button id="navLeases" class="relative flex items-center w-full py-3 pl-4 pr-3 rounded-lg transition-all duration-200 ${activeTab === 'leases' ? 'bg-white/[0.06] text-white' : 'text-ink-200 hover:bg-white/[0.04] hover:text-white'} group">${activeTab === 'leases' ? '<span class="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-brass-400"></span>' : ''}<span class="mr-3.5 opacity-80 group-hover:opacity-100 transition-opacity">${icons.FileText}</span><span class="text-sm font-medium">Lease Management</span></button></li>
                        <li><button id="navBilling" class="relative flex items-center w-full py-3 pl-4 pr-3 rounded-lg transition-all duration-200 ${activeTab === 'billing' ? 'bg-white/[0.06] text-white' : 'text-ink-200 hover:bg-white/[0.04] hover:text-white'} group">${activeTab === 'billing' ? '<span class="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-brass-400"></span>' : ''}<span class="mr-3.5 opacity-80 group-hover:opacity-100 transition-opacity">${icons.Receipt}</span><span class="text-sm font-medium">Billing & Receipts</span></button></li>
                        <li><button id="navMaintenance" class="relative flex items-center w-full py-3 pl-4 pr-3 rounded-lg transition-all duration-200 ${activeTab === 'maintenance' ? 'bg-white/[0.06] text-white' : 'text-ink-200 hover:bg-white/[0.04] hover:text-white'} group">${activeTab === 'maintenance' ? '<span class="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-brass-400"></span>' : ''}<span class="mr-3.5 opacity-80 group-hover:opacity-100 transition-opacity">${icons.Wrench}</span><span class="text-sm font-medium">Maintenance</span></button></li>
                        <li><button id="navFinance" class="relative flex items-center w-full py-3 pl-4 pr-3 rounded-lg transition-all duration-200 ${activeTab === 'finance' ? 'bg-white/[0.06] text-white' : 'text-ink-200 hover:bg-white/[0.04] hover:text-white'} group">${activeTab === 'finance' ? '<span class="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-brass-400"></span>' : ''}<span class="mr-3.5 opacity-80 group-hover:opacity-100 transition-opacity">${icons.DollarSign}</span><span class="text-sm font-medium">Financial Overview</span></button></li>
                        <li><button id="navReports" class="relative flex items-center w-full py-3 pl-4 pr-3 rounded-lg transition-all duration-200 ${activeTab === 'reports' ? 'bg-white/[0.06] text-white' : 'text-ink-200 hover:bg-white/[0.04] hover:text-white'} group">${activeTab === 'reports' ? '<span class="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-brass-400"></span>' : ''}<span class="mr-3.5 opacity-80 group-hover:opacity-100 transition-opacity">${icons.BarChart}</span><span class="text-sm font-medium">Reports & Analytics</span></button></li>
                        <li><button id="navSettings" class="relative flex items-center w-full py-3 pl-4 pr-3 rounded-lg transition-all duration-200 ${activeTab === 'settings' ? 'bg-white/[0.06] text-white' : 'text-ink-200 hover:bg-white/[0.04] hover:text-white'} group">${activeTab === 'settings' ? '<span class="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-brass-400"></span>' : ''}<span class="mr-3.5 opacity-80 group-hover:opacity-100 transition-opacity">${icons.Settings}</span><span class="text-sm font-medium">Settings & Backup</span></button></li>
                        <li><button id="navActivity" class="relative flex items-center w-full py-3 pl-4 pr-3 rounded-lg transition-all duration-200 ${activeTab === 'activity' ? 'bg-white/[0.06] text-white' : 'text-ink-200 hover:bg-white/[0.04] hover:text-white'} group">${activeTab === 'activity' ? '<span class="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-brass-400"></span>' : ''}<span class="mr-3.5 opacity-80 group-hover:opacity-100 transition-opacity">${icons.History}</span><span class="text-sm font-medium">Activity Logs</span></button></li>
                    </ul>
                </nav>
                <div class="mt-auto">
                    <div class="p-4 rounded-lg bg-white/[0.04] border border-white/[0.06]"><p class="text-[10px] uppercase tracking-wider text-ink-400">Signed in as</p><p class="text-sm font-medium text-white truncate">${userName} <span class="text-xs text-brass-300">(${userProfile?.role || '...'})</span></p></div>
                </div>
                <div class="mt-2">
                    <button id="logoutBtn" class="flex items-center w-full py-3 px-4 rounded-lg transition-all duration-200 text-ink-300 hover:bg-red-500/10 hover:text-red-300 group"><span class="mr-3.5 opacity-80 group-hover:opacity-100 transition-opacity">${icons.LogOut}</span><span class="text-sm font-medium">Logout</span></button>
                </div>
            </aside>

            <!-- Main Content -->
            <main class="flex-1 overflow-auto p-8 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'} transition-all duration-300 ease-in-out">
                <header class="glass-panel rounded-2xl shadow-premium p-6 md:p-7 mb-8 flex justify-between items-center">
                    <div>
                        <p class="text-[11px] uppercase tracking-[0.18em] text-brass-600 dark:text-brass-300 font-semibold mb-1.5">Dashboard</p>
                        <h2 class="text-2xl md:text-[2.15rem] brand-serif font-semibold text-ink-900 dark:text-white leading-tight">Welcome back, ${userName}</h2>
                        <p class="text-ink-500 dark:text-ink-300 mt-2 text-sm md:text-base">Here's what's happening with your properties today.</p>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button id="menuToggleBtn" class="lg:hidden p-3 rounded-xl glass-panel text-ink-700 dark:text-ink-100 fixed top-4 left-4 z-50 shadow-premium hover:border-brass-400/40 transition ${isSidebarOpen ? 'hidden' : ''}">${icons.Menu}</button>
                        <div class="hidden lg:flex items-center text-ink-500 dark:text-ink-300 bg-ink-900/[0.03] dark:bg-white/[0.04] border border-ink-900/[0.06] dark:border-white/[0.06] px-4 py-2.5 rounded-xl text-sm"><span class="text-brass-500 dark:text-brass-300">${icons.Calendar}</span><span class="ml-2 font-medium">${new Date().toLocaleDateString('en-KE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></div>
                    </div>
                </header>
                <div id="contentSection"></div>
            </main>

            <!-- FAB -->
            <div class="fixed bottom-8 right-8 z-40">
                <div class="relative">
                    <button id="fabMain" class="w-14 h-14 bg-ink-900 dark:bg-brass-500 text-brass-300 dark:text-ink-900 rounded-full shadow-premium-lg border border-brass-400/40 hover:scale-105 transition-all duration-300 flex items-center justify-center">${icons.PlusCircle}</button>
                    <div id="fabMenu" class="absolute bottom-16 right-0 space-y-3 opacity-0 pointer-events-none transition-all duration-300 transform scale-95">
                        <button id="fabAddProperty" class="w-12 h-12 glass-panel shadow-premium text-ink-700 dark:text-ink-100 rounded-full hover:border-brass-400/40 hover:text-brass-600 dark:hover:text-brass-300 transition-all duration-300 flex items-center justify-center" title="Add Property">${icons.Building}</button>
                        <button id="fabAddTenant" class="w-12 h-12 glass-panel shadow-premium text-ink-700 dark:text-ink-100 rounded-full hover:border-brass-400/40 hover:text-brass-600 dark:hover:text-brass-300 transition-all duration-300 flex items-center justify-center" title="Add Tenant">${icons.Users}</button>
                        <button id="fabCreateLease" class="w-12 h-12 glass-panel shadow-premium text-ink-700 dark:text-ink-100 rounded-full hover:border-brass-400/40 hover:text-brass-600 dark:hover:text-brass-300 transition-all duration-300 flex items-center justify-center" title="Create Lease">${icons.FileText}</button>
                        <button id="fabMaintenanceRequest" class="w-12 h-12 glass-panel shadow-premium text-ink-700 dark:text-ink-100 rounded-full hover:border-brass-400/40 hover:text-brass-600 dark:hover:text-brass-300 transition-all duration-300 flex items-center justify-center" title="Maintenance Request">${icons.Wrench}</button>
                        <button id="fabGenerateBill" class="w-12 h-12 glass-panel shadow-premium text-ink-700 dark:text-ink-100 rounded-full hover:border-brass-400/40 hover:text-brass-600 dark:hover:text-brass-300 transition-all duration-300 flex items-center justify-center" title="Generate Bills">${icons.Receipt}</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Nav listeners
    document.getElementById('navSummary').addEventListener('click', () => { activeTab = 'summary'; isSidebarOpen = false; renderDashboardPage(); });
    document.getElementById('navProperties').addEventListener('click', () => { activeTab = 'properties'; isSidebarOpen = false; renderDashboardPage(); });
    document.getElementById('navTenants').addEventListener('click', () => { activeTab = 'tenants'; isSidebarOpen = false; renderDashboardPage(); });
    if (userProfile?.role === 'owner') document.getElementById('navUserManagement').addEventListener('click', () => { activeTab = 'userManagement'; isSidebarOpen = false; renderDashboardPage(); });
    document.getElementById('navLeases').addEventListener('click', () => { activeTab = 'leases'; isSidebarOpen = false; renderDashboardPage(); });
    document.getElementById('navBilling').addEventListener('click', () => { activeTab = 'billing'; isSidebarOpen = false; renderDashboardPage(); });
    document.getElementById('navMaintenance').addEventListener('click', () => { activeTab = 'maintenance'; isSidebarOpen = false; renderDashboardPage(); });
    document.getElementById('navFinance').addEventListener('click', () => { activeTab = 'finance'; isSidebarOpen = false; renderDashboardPage(); });
    document.getElementById('navReports').addEventListener('click', () => { activeTab = 'reports'; isSidebarOpen = false; renderDashboardPage(); });
    document.getElementById('navSettings').addEventListener('click', () => { activeTab = 'settings'; isSidebarOpen = false; renderDashboardPage(); });
    document.getElementById('navActivity').addEventListener('click', () => { activeTab = 'activity'; isSidebarOpen = false; renderDashboardPage(); });
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    document.getElementById('menuToggleBtn').addEventListener('click', () => { isSidebarOpen = !isSidebarOpen; renderDashboardPage(); });

    // FAB
    let fabMenuOpen = false;
    document.getElementById('fabMain').addEventListener('click', () => {
        const fabMenu = document.getElementById('fabMenu');
        fabMenuOpen = !fabMenuOpen;
        if (fabMenuOpen) { fabMenu.classList.remove('opacity-0', 'pointer-events-none', 'scale-95'); fabMenu.classList.add('opacity-100', 'pointer-events-auto', 'scale-100'); }
        else { fabMenu.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100'); fabMenu.classList.add('opacity-0', 'pointer-events-none', 'scale-95'); }
    });
    document.getElementById('fabAddProperty').addEventListener('click', () => { showAddPropertyModal(); closeFabMenu(); });
    document.getElementById('fabAddTenant').addEventListener('click', () => { if (!properties.length) { showNotification('Please add a property first.', 'error'); return; } showAddTenantModal(); closeFabMenu(); });
    document.getElementById('fabCreateLease').addEventListener('click', () => { if (!tenants.length) { showNotification('Please add a tenant first.', 'error'); return; } showAddLeaseModal(); closeFabMenu(); });
    document.getElementById('fabMaintenanceRequest').addEventListener('click', () => { if (!properties.length) { showNotification('Please add a property first.', 'error'); return; } showAddMaintenanceModal(); closeFabMenu(); });
    document.getElementById('fabGenerateBill').addEventListener('click', () => { activeTab = 'billing'; isSidebarOpen = false; closeFabMenu(); renderDashboardPage(); });

    function closeFabMenu() {
        fabMenuOpen = false;
        const fm = document.getElementById('fabMenu');
        if (fm) { fm.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100'); fm.classList.add('opacity-0', 'pointer-events-none', 'scale-95'); }
    }

    // Content
    const cs = document.getElementById('contentSection');
    if (!cs) return;
    switch (activeTab) {
        case 'summary': cs.innerHTML = renderSummarySection(totalProperties, totalTenants, billsGenerated); setTimeout(() => initializeCharts(), 100); break;
        case 'properties': renderPropertiesSection(cs); break;
        case 'tenants': renderTenantsSection(cs); break;
        case 'userManagement': if (userProfile?.role === 'owner') renderUserManagementSection(cs); break;
        case 'leases': renderLeasesSection(cs); break;
        case 'billing': renderBillingSection(cs); break;
        case 'maintenance': renderMaintenanceSection(cs); break;
        case 'finance': renderFinancialSection(cs); break;
        case 'reports': renderReportsSection(cs); break;
        case 'settings': renderSettingsSection(cs); break;
        case 'activity': renderActivityLogSection(cs); break;
    }
}

// ============================================================
// SUMMARY SECTION
// ============================================================
function renderSummarySection(totalProperties, totalUnits, billsGenerated) {
    const totalRentExpected = tenants.reduce((sum, t) => sum + t.amountCharged, 0);
    const totalPaid = payments.reduce((sum, p) => sum + p.amount, 0);
    const totalOutstanding = tenants.reduce((sum, t) => sum + t.outstandingBalance, 0);
    return `
        <section class="space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                ${renderStatCard(icons.Building, "Total Properties", totalProperties, "bg-gradient-to-r from-brass-500 to-brass-600")}
                ${renderStatCard(icons.HomeIcon, "Total Units", totalUnits, "bg-gradient-to-r from-green-500 to-green-600")}
                ${renderStatCard(icons.Users, "Total Tenants", tenants.length, "bg-gradient-to-r from-brass-400 to-brass-600")}
                ${renderStatCard(icons.Receipt, "Bills Generated", billsGenerated, "bg-gradient-to-r from-orange-500 to-orange-600")}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${renderStatCard(icons.DollarSign, "Monthly Rent Expected", formatCurrency(totalRentExpected), "bg-gradient-to-r from-emerald-500 to-emerald-600")}
                ${renderStatCard(icons.Wallet, "Total Collected", formatCurrency(totalPaid), "bg-gradient-to-r from-teal-500 to-teal-600")}
                ${renderStatCard(icons.FileText, "Outstanding Balance", formatCurrency(totalOutstanding), "bg-gradient-to-r from-red-500 to-red-600")}
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="glass-panel rounded-2xl p-6"><h3 class="text-xl font-bold text-ink-800 dark:text-ink-200 mb-4">Revenue Overview</h3><canvas id="revenueChart" width="400" height="200"></canvas></div>
                <div class="glass-panel rounded-2xl p-6"><h3 class="text-xl font-bold text-ink-800 dark:text-ink-200 mb-4">Property Distribution</h3><canvas id="propertyChart" width="400" height="200"></canvas></div>
            </div>
            <div class="glass-panel rounded-2xl p-6">
                <h3 class="text-xl font-bold text-ink-800 dark:text-ink-200 mb-4">Recent Activity</h3>
                <div class="space-y-3 custom-scrollbar overflow-y-auto max-h-60">
                    ${getRecentActivity().length > 0 ? getRecentActivity().map(a => `
                        <div class="flex items-start space-x-3 p-3 rounded-lg bg-white/50 dark:bg-black/20">
                            <div class="w-2 h-2 rounded-full ${getActivityIconColor(a.action)} mt-1.5 shrink-0"></div>
                            <div>
                                <p class="text-sm text-ink-700 dark:text-ink-300">${a.details}</p>
                                <p class="text-xs text-ink-500 dark:text-ink-400 mt-0.5">${a.timeAgo}</p>
                            </div>
                        </div>`).join('') : '<p class="text-center text-ink-500 py-8">No recent activity.</p>'}
                </div>
            </div>
        </section>
    `;
}

function getRecentActivity(limit = 10) {
    return activityLogs.slice(0, limit).map(log => {
        const logTime = log.createdAt?.toDate ? log.createdAt.toDate() : new Date();
        return { ...log, timeAgo: timeAgo(logTime) };
    });
}

// ============================================================
// CHARTS
// ============================================================
function initializeCharts() {
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        const md = getMonthlyRevenueData();
        charts.revenue = createChart('revenueChart', { type: 'line', data: { labels: md.labels, datasets: [{ label: 'Revenue', data: md.data, borderColor: 'rgb(79, 70, 229)', backgroundColor: 'rgba(79, 70, 229, 0.1)', tension: 0.4, fill: true }] }, options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { callback: v => formatCurrency(v) } } } } });
    }
    const propertyCtx = document.getElementById('propertyChart');
    if (propertyCtx) {
        const pd = getPropertyDistributionData();
        charts.property = createChart('propertyChart', { type: 'doughnut', data: { labels: pd.labels, datasets: [{ data: pd.data, backgroundColor: ['rgba(102, 126, 234, 0.8)', 'rgba(79, 172, 254, 0.8)', 'rgba(67, 233, 123, 0.8)', 'rgba(240, 147, 251, 0.8)', 'rgba(255, 193, 7, 0.8)'], borderWidth: 0 }] }, options: { responsive: true, plugins: { legend: { position: 'bottom' } } } });
    }
}

function getMonthlyRevenueData() {
    const labels = [], data = [];
    for (let i = 5; i >= 0; i--) {
        const d = new Date(); d.setMonth(d.getMonth() - i);
        const my = d.toISOString().substring(0, 7);
        labels.push(d.toLocaleDateString('en-KE', { month: 'short', year: 'numeric' }));
        data.push(payments.filter(p => p.paymentDate.startsWith(my)).reduce((s, p) => s + p.amount, 0));
    }
    return { labels, data };
}

function getPropertyDistributionData() {
    const counts = {};
    tenants.forEach(t => { const p = properties.find(pr => pr.id === t.propertyId); if (p) counts[p.name] = (counts[p.name] || 0) + 1; });
    return { labels: Object.keys(counts), data: Object.values(counts) };
}

// ============================================================
// PROPERTIES SECTION
// ============================================================
function renderPropertiesSection(parentEl) {
    parentEl.innerHTML = `
        <section class="glass-panel rounded-2xl shadow-premium p-8">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div><h3 class="text-3xl font-bold gradient-text">Your Properties</h3><p class="text-ink-600 dark:text-ink-400 mt-2">Manage your property portfolio</p></div>
                <button id="addPropertyBtn" class="bg-gradient-to-r from-brass-600 to-brass-700 text-white px-6 py-3 rounded-xl flex items-center font-medium shadow-premium hover:shadow-premium-lg hover:-translate-y-0.5 transition-all duration-300 mt-4 md:mt-0">${icons.PlusCircle}<span class="ml-2">Add Property</span></button>
            </div>
            <div id="propertiesList" class="space-y-6">${properties.length === 0 ? `<div class="text-center py-12"><div class="w-24 h-24 mx-auto mb-6 rounded-full bg-brass-50 dark:bg-white/5 border border-brass-200 dark:border-white/10 flex items-center justify-center text-brass-500 dark:text-brass-300">${icons.Building}</div><h4 class="text-xl font-semibold text-ink-800 dark:text-ink-200 mb-2">No Properties Yet</h4><p class="text-ink-600 dark:text-ink-400 mb-6">Start by adding your first property</p></div>` : ''}</div>
        </section>
    `;
    document.getElementById('addPropertyBtn').addEventListener('click', () => showAddPropertyModal());
    updatePropertiesList();
}

function updatePropertiesList() {
    const div = document.getElementById('propertiesList');
    if (!div) return;
    if (!properties.length) { div.innerHTML = `<p class="text-ink-600 text-center py-8">No properties yet. Click "Add Property" to get started!</p>`; return; }
    div.innerHTML = properties.map(p => {
        const pts = tenants.filter(t => t.propertyId === p.id);
        return `<div class="glass-panel rounded-2xl p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-lg">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div class="flex items-center space-x-4">
                    <div class="w-16 h-16 rounded-xl bg-gradient-to-r from-brass-600 to-brass-700 flex items-center justify-center text-white font-bold text-xl">${p.name.charAt(0)}</div>
                    <div><h4 class="text-2xl font-bold text-ink-800 dark:text-ink-200">${p.name}</h4><p class="text-ink-600 dark:text-ink-400">${p.location}</p><div class="flex items-center space-x-4 mt-2"><span class="text-sm text-ink-500 dark:text-ink-400">${pts.length} tenants</span><span class="text-sm text-ink-500 dark:text-ink-400">•</span><span class="text-sm text-ink-500 dark:text-ink-400">${formatCurrency(pts.reduce((s, t) => s + t.amountCharged, 0))}/month</span></div></div>
                </div>
                <div class="flex space-x-3 mt-4 md:mt-0">
                    <button data-property-id="${p.id}" class="add-tenant-btn bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-xl text-sm flex items-center font-medium hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300">${icons.PlusCircle}<span class="ml-1">Add Tenant</span></button>
                    ${userProfile?.role === 'owner' ? `<button data-property-id="${p.id}" class="delete-property-btn bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-xl text-sm flex items-center font-medium hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300">${icons.Trash2}<span class="ml-1">Delete</span></button>` : ''}
                </div>
            </div>
        </div>`;
    }).join('');
    div.querySelectorAll('.add-tenant-btn').forEach(b => b.addEventListener('click', (e) => showAddTenantModal(e.currentTarget.dataset.propertyId)));
    if (userProfile?.role === 'owner') div.querySelectorAll('.delete-property-btn').forEach(b => b.addEventListener('click', (e) => handleDeleteProperty(e.currentTarget.dataset.propertyId)));
}

function showAddPropertyModal(propertyToEdit = null) {
    const isEditing = !!propertyToEdit;
    const fc = `<div class="text-center mb-8"><h3 class="text-2xl font-bold form-title-gradient bg-clip-text text-transparent mb-2">${isEditing ? 'Edit Property' : 'Add New Property'}</h3><p class="text-ink-600 dark:text-ink-400">${isEditing ? 'Update property information' : 'Enter property details'}</p></div>
        <form id="addEditPropertyForm">
            <div class="mb-6"><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="propertyName">Property Name</label><input type="text" id="propertyName" name="propertyName" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" value="${propertyToEdit ? propertyToEdit.name : ''}" placeholder="e.g., Apollo Heights" required></div>
            <div class="mb-6"><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="propertyLocation">Location</label><input type="text" id="propertyLocation" name="propertyLocation" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" value="${propertyToEdit ? propertyToEdit.location : ''}" placeholder="e.g., Westlands, Nairobi" required></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="waterPricePerUnit">Water Price per Unit (Ksh)</label><input type="number" id="waterPricePerUnit" name="waterPricePerUnit" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" value="${propertyToEdit ? (propertyToEdit.waterPricePerUnit || 200) : 200}" placeholder="200" required></div>
                <div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="garbageCollectionFee">Garbage Collection Fee (Ksh)</label><input type="number" id="garbageCollectionFee" name="garbageCollectionFee" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" value="${propertyToEdit ? (propertyToEdit.garbageCollectionFee || 150) : 150}" placeholder="150" required></div>
            </div>
        </form>`;
    showModal(isEditing ? 'Edit Property' : 'Add New Property', fc, 'confirm', () => {
        const f = document.getElementById('addEditPropertyForm');
        const d = { name: f.elements['propertyName'].value, location: f.elements['propertyLocation'].value, waterPricePerUnit: parseFloat(f.elements['waterPricePerUnit'].value) || 200, garbageCollectionFee: parseFloat(f.elements['garbageCollectionFee'].value) || 150 };
        if (isEditing) { 
            updateData('properties', propertyToEdit.id, d).then(() => { const i = properties.findIndex(p => p.id === propertyToEdit.id); if (i !== -1) properties[i] = { ...properties[i], ...d }; updatePropertiesList(); }); 
            const changes = [];
            if (propertyToEdit.name !== d.name) changes.push(`name: "${propertyToEdit.name}" → "${d.name}"`);
            if (propertyToEdit.location !== d.location) changes.push(`location: "${propertyToEdit.location}" → "${d.location}"`);
            logActivity('update_property', `Updated property: ${d.name} (${changes.join('; ') || 'no changes'})`, 'property', propertyToEdit.id, propertyToEdit.id);
            showNotification("Property updated!", "success"); 
        } else { 
            saveData('properties', d).then(sp => { if (sp) { properties.push(sp); logActivity('create_property', `Created property: ${d.name}`, 'property', sp.id, sp.id); } updatePropertiesList(); });
            showNotification("Property added!", "success"); 
        }
        updateBillingTenantDropdown(); renderFinancialSection(document.getElementById('contentSection'));
        if (activeTab === 'billing') renderBillingSection(document.getElementById('contentSection'));
    });
}

function handleDeleteProperty(propertyId) {
    const p = properties.find(x => x.id === propertyId);
    if (!p) return;
    if (userProfile?.role !== 'owner') {
        showNotification("You don't have permission to delete properties.", "error");
        return;
    }
    showModal("Confirm Deletion", `Delete '${p.name}'? This also deletes all tenants and bills.`, 'confirm', () => {
        deleteData('properties', propertyId);
        tenants.filter(t => t.propertyId === propertyId).forEach(t => deleteData('tenants', t.id));
        bills.filter(b => b.propertyId === propertyId).forEach(b => deleteData('bills', b.id));
        payments.filter(p => p.propertyId === propertyId).forEach(p => deleteData('payments', p.id));
        properties = properties.filter(x => x.id !== propertyId);
        tenants = tenants.filter(t => t.propertyId !== propertyId);
        bills = bills.filter(b => b.propertyId !== propertyId);
        payments = payments.filter(p => p.propertyId !== propertyId);
        logActivity('delete_property', `Deleted property: ${p.name}`, 'property', propertyId, propertyId);
        showNotification(`'${p.name}' deleted.`, "success");
        updatePropertiesList(); updateBillingTenantDropdown(); updateGeneratedBillsList(); renderFinancialSection(document.getElementById('contentSection'));
        if (activeTab === 'billing') renderBillingSection(document.getElementById('contentSection'));
    });
}

// ============================================================
// TENANTS SECTION
// ============================================================
function renderTenantsSection(parentEl) {
    parentEl.innerHTML = `
        <section class="glass-panel rounded-2xl shadow-premium p-8">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div><h3 class="text-3xl font-bold gradient-text">All Tenants</h3><p class="text-ink-600 dark:text-ink-400 mt-2">View and manage all tenants</p></div>
                <button id="addTenantBtn" class="bg-gradient-to-r from-brass-600 to-brass-700 text-white px-6 py-3 rounded-xl flex items-center font-medium shadow-premium hover:shadow-premium-lg hover:-translate-y-0.5 transition-all duration-300 mt-4 md:mt-0">${icons.PlusCircle}<span class="ml-2">Add Tenant</span></button>
            </div>
            <div class="relative mb-6"><input type="text" id="tenantSearchInput" placeholder="Search tenants..." class="w-full pl-12 pr-4 py-3 border-0 rounded-xl glass-panel focus:ring-2 focus:ring-brass-500 focus:outline-none text-ink-800 dark:text-ink-200 placeholder-ink-500 dark:placeholder-ink-400" value="${tenantSearchQuery}"><div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">${icons.Search}</div></div>
            <div id="allTenantsListContainer"></div>
        </section>
    `;
    document.getElementById('addTenantBtn').addEventListener('click', () => showAddTenantModal());
    document.getElementById('tenantSearchInput').addEventListener('input', (e) => { tenantSearchQuery = e.target.value; renderAllTenantsList(); });
    renderAllTenantsList();
}

function renderAllTenantsList() {
    const container = document.getElementById('allTenantsListContainer');
    if (!container) return;
    const q = tenantSearchQuery.toLowerCase();
    const filtered = tenants.filter(t => t.name.toLowerCase().includes(q) || t.houseNumber.toLowerCase().includes(q) || t.phoneNumber.includes(q));
    if (!filtered.length) { container.innerHTML = `<div class="text-center py-12"><div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-ink-100 to-ink-200 flex items-center justify-center">${icons.Users}</div><h4 class="text-xl font-semibold text-ink-800 dark:text-ink-200 mb-2">No Tenants Found</h4></div>`; return; }
    container.innerHTML = `<div class="glass-panel rounded-xl overflow-hidden"><div class="overflow-x-auto"><table class="min-w-full"><thead class="bg-ink-50 dark:bg-ink-700/50"><tr><th class="py-4 px-6 text-left text-xs font-semibold text-ink-600 uppercase tracking-wider">Tenant</th><th class="py-4 px-6 text-left text-xs font-semibold text-ink-600 uppercase tracking-wider">Property & House</th><th class="py-4 px-6 text-left text-xs font-semibold text-ink-600 uppercase tracking-wider">Rent</th><th class="py-4 px-6 text-left text-xs font-semibold text-ink-600 uppercase tracking-wider">Balance</th><th class="py-4 px-6 text-left text-xs font-semibold text-ink-600 uppercase tracking-wider">Phone</th><th class="py-4 px-6 text-left text-xs font-semibold text-ink-600 uppercase tracking-wider">Actions</th></tr></thead><tbody class="divide-y divide-ink-200 dark:divide-ink-700">${filtered.map(t => getTenantTableRowHTML(t)).join('')}</tbody></table></div></div>`;
    container.querySelectorAll('.payment-btn').forEach(b => b.addEventListener('click', (e) => showPaymentModal(tenants.find(t => t.id === e.currentTarget.dataset.tenantId))));
    container.querySelectorAll('.water-meter-btn').forEach(b => b.addEventListener('click', (e) => showWaterMeterReadingModal(tenants.find(t => t.id === e.currentTarget.dataset.tenantId))));
    container.querySelectorAll('.edit-tenant-btn').forEach(b => b.addEventListener('click', (e) => showEditTenantModal(tenants.find(t => t.id === e.currentTarget.dataset.tenantId))));
    container.querySelectorAll('.delete-tenant-btn').forEach(b => b.addEventListener('click', (e) => handleDeleteTenant(e.currentTarget.dataset.tenantId)));
}

function getTenantTableRowHTML(tenant) {
    const property = properties.find(p => p.id === tenant.propertyId);
    const bc = tenant.outstandingBalance > 0 ? 'text-red-600 dark:text-red-400 font-semibold' : 'text-green-600 dark:text-green-400';
    const bt = tenant.outstandingBalance > 0 ? `${formatCurrency(tenant.outstandingBalance)} Due` : 'Paid';
    return `<tr class="hover:bg-ink-50 dark:hover:bg-ink-800 transition-colors duration-200">
        <td class="py-4 px-6 whitespace-nowrap"><div class="flex items-center"><div class="w-10 h-10 rounded-full bg-gradient-to-r from-brass-300 to-brass-400 flex items-center justify-center text-white font-semibold text-sm mr-3">${tenant.name.charAt(0)}</div><div class="text-sm font-medium text-ink-900 dark:text-ink-100">${tenant.name}</div></div></td>
        <td class="py-4 px-6 whitespace-nowrap text-sm text-ink-600 dark:text-ink-400">${property?.name || 'N/A'} <span class="font-medium text-ink-800 dark:text-ink-200">(${tenant.houseNumber})</span></td>
        <td class="py-4 px-6 whitespace-nowrap text-sm font-semibold text-ink-900 dark:text-ink-100">${formatCurrency(tenant.amountCharged)}</td>
        <td class="py-4 px-6 whitespace-nowrap text-sm ${bc}">${bt}</td>
        <td class="py-4 px-6 whitespace-nowrap text-sm text-ink-600 dark:text-ink-400">${tenant.phoneNumber}</td>
        <td class="py-4 px-6 whitespace-nowrap text-sm"><div class="flex space-x-2">
            <button data-tenant-id="${tenant.id}" class="payment-btn p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-800 transition duration-200" title="Record Payment">${icons.Wallet}</button>
            <button data-tenant-id="${tenant.id}" class="water-meter-btn p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-200 dark:hover:bg-cyan-800 transition duration-200" title="Record Water Meter">💧</button>
            <button data-tenant-id="${tenant.id}" class="edit-tenant-btn p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition duration-200" title="Edit Tenant">${icons.Edit}</button>
            <button data-tenant-id="${tenant.id}" class="delete-tenant-btn p-2 rounded-lg bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-800 transition duration-200" title="Delete Tenant">${icons.Trash2}</button>
        </div></td>
    </tr>`;
}

function showAddTenantModal(preselectedPropertyId = null) {
    if (!properties.length) { showNotification('Add a property first.', 'error'); return; }
    const fc = `<div class="text-center mb-8"><h3 class="text-2xl font-bold form-title-gradient bg-clip-text text-transparent mb-2">Add New Tenant</h3><p class="text-ink-600 dark:text-ink-400">Enter details for the new tenant</p></div>
        <form id="addTenantForm">
            <div class="mb-6"><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="propertySelect">Select Property</label><select id="propertySelect" name="propertySelect" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" required><option value="">Choose...</option>${properties.map(p => `<option value="${p.id}" ${preselectedPropertyId === p.id ? 'selected' : ''}>${p.name} - ${p.location}</option>`).join('')}</select></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="tenantName">Tenant Name</label><input type="text" id="tenantName" name="tenantName" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" placeholder="Full name" required></div><div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="houseNumber">House/Unit</label><input type="text" id="houseNumber" name="houseNumber" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" placeholder="e.g., A1" required></div></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="houseType">House Type</label><select id="houseType" name="houseType" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" required><option value="">Select...</option>${houseTypes.map(t => `<option value="${t}">${t}</option>`).join('')}</select></div><div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="rentAmount">Monthly Rent (Ksh)</label><input type="number" id="rentAmount" name="rentAmount" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" placeholder="0" required></div></div>
            <div class="mb-6"><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="phoneNumber">Phone</label><input type="tel" id="phoneNumber" name="phoneNumber" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" placeholder="+254 700 000 000" required></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="initialWaterMeter">Initial Water Meter Reading</label><input type="number" id="initialWaterMeter" name="initialWaterMeter" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" placeholder="0" value="0"></div><div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="waterMeterNumber">Water Meter Number</label><input type="text" id="waterMeterNumber" name="waterMeterNumber" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" placeholder="e.g., WM001"></div></div>
            <div class="mb-6"><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2">Billing Preferences</label><div class="flex flex-wrap gap-4"><label class="flex items-center gap-2 text-ink-700 dark:text-ink-300"><input type="checkbox" id="includeWater" name="includeWater" checked class="form-checkbox h-4 w-4 text-brass-600 rounded"><span>Include Water</span></label><label class="flex items-center gap-2 text-ink-700 dark:text-ink-300"><input type="checkbox" id="includeGarbage" name="includeGarbage" checked class="form-checkbox h-4 w-4 text-brass-600 rounded"><span>Include Garbage</span></label></div><p id="propertyRatesDisplay" class="text-xs text-ink-500 mt-2"></p></div>
        </form>`;
    showModal("Add New Tenant", fc, 'confirm', (closeModal) => {
        const f = document.getElementById('addTenantForm');
        const pid = document.getElementById('propertySelect').value, name = document.getElementById('tenantName').value, hn = document.getElementById('houseNumber').value, ht = document.getElementById('houseType').value, rent = parseFloat(document.getElementById('rentAmount').value), phone = document.getElementById('phoneNumber').value, iwm = parseFloat(document.getElementById('initialWaterMeter').value) || 0, wmn = document.getElementById('waterMeterNumber').value, iw = document.getElementById('includeWater').checked, ig = document.getElementById('includeGarbage').checked;
        if (!pid || !name || !hn || !ht || !rent || !phone) { showNotification('Fill all required fields.', 'error'); return; }
        const nt = { propertyId: pid, name, houseNumber: hn, houseType: ht, amountCharged: rent, phoneNumber: phone, outstandingBalance: 0, lastBilledDate: null, lastPaidDate: null, createdAt: new Date().toISOString(), waterMeterNumber: wmn, initialWaterMeterReading: iwm, currentWaterMeterReading: iwm, lastWaterMeterReadingDate: new Date().toISOString(), includeWaterBill: iw, includeGarbageCollection: ig, nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() };
        saveData('tenants', nt).then(st => { 
            if (st) tenants.push(st); 
            logActivity('create_tenant', `Added new tenant ${name} to house ${hn}`, 'tenant', st.id, st.propertyId);
            if (activeTab === 'tenants') renderAllTenantsList(); updatePropertiesList(); 
        });
        showNotification('Tenant added!', 'success');
        updateBillingTenantList(); renderFinancialSection(document.getElementById('contentSection'));
    });
}

function showEditTenantModal(tenantToEdit) {
    const p = properties.find(pr => pr.id === tenantToEdit.propertyId);
    const fc = `<div class="text-center mb-8"><h3 class="text-2xl font-bold form-title-gradient bg-clip-text text-transparent mb-2">Edit Tenant</h3></div>
        <form id="editTenantForm">
            <div class="mb-6"><label class="block text-sm font-semibold mb-2">Property</label><input type="text" value="${p ? p.name : 'Unknown'}" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-ink-100 dark:bg-ink-700 text-ink-700 dark:text-ink-300 cursor-not-allowed" readonly></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="editTenantName">Name</label><input type="text" id="editTenantName" value="${tenantToEdit.name}" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" required></div><div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="editHouseNumber">House</label><input type="text" id="editHouseNumber" value="${tenantToEdit.houseNumber}" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" required></div></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="editHouseType">House Type</label><select id="editHouseType" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition">${houseTypes.map(t => `<option value="${t}" ${tenantToEdit.houseType === t ? 'selected' : ''}>${t}</option>`).join('')}</select></div><div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="editRentAmount">Rent</label><input type="number" id="editRentAmount" value="${tenantToEdit.amountCharged}" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" required></div></div>
            <div class="mb-6"><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="editPhoneNumber">Phone</label><input type="tel" id="editPhoneNumber" value="${tenantToEdit.phoneNumber}" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" required></div>
        </form>`;
    showModal("Edit Tenant", fc, 'confirm', () => {
        const f = document.getElementById('editTenantForm');
        const d = { name: f.elements['editTenantName'].value, houseNumber: f.elements['editHouseNumber'].value, houseType: f.elements['editHouseType'].value, amountCharged: parseFloat(f.elements['editRentAmount'].value), phoneNumber: f.elements['editPhoneNumber'].value };
        updateData('tenants', tenantToEdit.id, d).then(() => { const i = tenants.findIndex(t => t.id === tenantToEdit.id); if (i !== -1) tenants[i] = { ...tenants[i], ...d }; 
            const changes = [];
            if (tenantToEdit.name !== d.name) changes.push(`name: "${tenantToEdit.name}" → "${d.name}"`);
            if (tenantToEdit.houseNumber !== d.houseNumber) changes.push(`house: "${tenantToEdit.houseNumber}" → "${d.houseNumber}"`);
            if (tenantToEdit.houseType !== d.houseType) changes.push(`type: "${tenantToEdit.houseType}" → "${d.houseType}"`);
            if (tenantToEdit.amountCharged !== d.amountCharged) changes.push(`rent: ${formatCurrency(tenantToEdit.amountCharged)} → ${formatCurrency(d.amountCharged)}`);
            if (tenantToEdit.phoneNumber !== d.phoneNumber) changes.push(`phone: "${tenantToEdit.phoneNumber}" → "${d.phoneNumber}"`);
            logActivity('update_tenant', `Updated tenant: ${d.name} (${changes.join('; ') || 'no changes'})`, 'tenant', tenantToEdit.id, tenantToEdit.propertyId); });
        showNotification('Tenant updated!', 'success');
        updatePropertiesList(); if (activeTab === 'tenants') renderAllTenantsList(); updateBillingTenantList(); renderFinancialSection(document.getElementById('contentSection'));
    });
}

function handleDeleteTenant(tenantId) {
    const t = tenants.find(x => x.id === tenantId);
    if (!t) return;
    if (userProfile?.role === 'admin' && !userProfile.assignedProperties.includes(t.propertyId)) {
        showNotification("You don't have permission to delete this tenant.", "error");
        return;
    }
    showModal("Confirm Deletion", `Delete '${t.name}' from house '${t.houseNumber}'?`, 'confirm', () => {
        deleteData('tenants', tenantId);
        bills.filter(b => b.tenantId === tenantId).forEach(b => deleteData('bills', b.id));
        payments.filter(p => p.tenantId === tenantId).forEach(p => deleteData('payments', p.id));
        leases.filter(l => l.tenantId === tenantId).forEach(l => deleteData('leases', l.id));
        tenants = tenants.filter(x => x.id !== tenantId);
        bills = bills.filter(b => b.tenantId !== tenantId);
        payments = payments.filter(p => p.tenantId !== tenantId);
        leases = leases.filter(l => l.tenantId !== tenantId);
        logActivity('delete_tenant', `Deleted tenant ${t.name} from house ${t.houseNumber}`, 'tenant', tenantId, t.propertyId);
        showNotification("Tenant deleted.", "success");
        updatePropertiesList(); if (activeTab === 'tenants') renderAllTenantsList(); updateBillingTenantList(); updateGeneratedBillsList(); renderFinancialSection(document.getElementById('contentSection'));
    });
}

// ============================================================
// PAYMENT MODAL
// ============================================================
function showPaymentModal(tenant) {
    const fc = `<div class="text-center mb-8"><h3 class="text-2xl font-bold form-title-gradient bg-clip-text text-transparent mb-2">Record Payment</h3><p class="text-ink-600 dark:text-ink-400">Payment from ${tenant.name}</p></div>
        <form id="paymentForm">
            <div class="mb-6"><label class="block text-sm font-semibold mb-2">Tenant</label><div class="bg-blue-50 dark:bg-blue-900 bg-opacity-50 rounded-lg p-4"><p class="text-lg font-semibold">${tenant.name}</p><p class="text-sm">House: ${tenant.houseNumber}</p></div></div>
            <div class="mb-6"><label class="block text-sm font-semibold mb-2">Outstanding Balance</label><div class="bg-red-50 dark:bg-red-900 bg-opacity-50 rounded-lg p-4"><p class="text-xl font-bold text-red-600 dark:text-red-400">${formatCurrency(tenant.outstandingBalance)}</p></div></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="paymentAmount">Amount (Ksh)</label><input type="number" id="paymentAmount" name="paymentAmount" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" step="0.01" min="0" value="${tenant.outstandingBalance.toFixed(2)}" required></div><div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="paymentDate">Date</label><input type="date" id="paymentDate" name="paymentDate" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" value="${new Date().toISOString().substring(0, 10)}" required></div></div>
        </form>`;
    showModal("Record Payment", fc, 'confirm', () => {
        const f = document.getElementById('paymentForm');
        const amt = parseFloat(f.elements['paymentAmount'].value), dt = f.elements['paymentDate'].value;
        if (isNaN(amt) || amt <= 0) { showNotification("Enter a valid amount.", "error"); return; }
        const pr = { tenantId: tenant.id, tenantName: tenant.name, propertyId: tenant.propertyId, houseNumber: tenant.houseNumber, amount: amt, paymentDate: new Date(dt).toISOString() };
        saveData('payments', pr).then(sp => { if (sp) { payments.push(sp); logActivity('record_payment', `Recorded payment of ${formatCurrency(amt)} from ${tenant.name}`, 'payment', sp.id, tenant.propertyId); } });
        const nb = tenant.outstandingBalance - amt;
        updateData('tenants', tenant.id, { outstandingBalance: nb, lastPaidDate: new Date(dt).toISOString() }).then(() => { const i = tenants.findIndex(t => t.id === tenant.id); if (i !== -1) tenants[i].outstandingBalance = nb; if (activeTab === 'tenants') renderAllTenantsList(); updatePropertiesList(); });
        
        showNotification(`Payment of ${formatCurrency(amt)} recorded!`, 'success');
        updatePropertiesList(); renderFinancialSection(document.getElementById('contentSection'));
    });
}

// ============================================================
// WATER METER READING MODAL
// ============================================================
function showWaterMeterReadingModal(tenant) {
    const p = properties.find(pr => pr.id === tenant.propertyId);
    const waterPrice = p?.waterPricePerUnit || globalSettings.waterPricePerUnit;
    const garbageFee = p?.garbageCollectionFee || globalSettings.garbageCollectionFee;
    const fc = document.createElement('div');
    fc.innerHTML = `<div class="text-center mb-8"><h3 class="text-2xl font-bold form-title-gradient bg-clip-text text-transparent mb-2">Water Meter Reading</h3></div>
        <form id="waterMeterForm">
            <div class="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg"><h4 class="text-lg font-semibold mb-2">${tenant.name}</h4><p>House: ${tenant.houseNumber} | Property: ${p?.name || 'Unknown'} | Meter: ${tenant.waterMeterNumber || 'N/A'}</p><p class="text-xs mt-1">Water: Ksh ${waterPrice}/unit | Garbage: Ksh ${garbageFee}/month</p></div>
            <div class="mb-6"><label class="block text-sm font-semibold mb-2" for="currentReading">Current Reading</label><input type="number" id="currentReading" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" placeholder="Enter reading" required><small class="text-ink-500 block mt-2">Last: ${tenant.currentWaterMeterReading || 0} units</small></div>
            <div class="mb-6"><label class="block text-sm font-semibold mb-2" for="readingDate">Date</label><input type="date" id="readingDate" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" value="${new Date().toISOString().substring(0, 10)}"></div>
            <div class="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg"><h4 class="text-lg font-semibold mb-2">Estimated Bill</h4><p>Units: <span id="unitsUsed">0</span> | Water: <span id="waterCost">0</span> | Garbage: <span id="garbageCost">${tenant.includeGarbageCollection ? garbageFee : 0}</span> | <strong>Total: <span id="totalCost">0</span></strong></p></div>
        </form>`;
    const res = showModal("Water Meter Reading", fc, 'confirm', (closeModal) => {
        const f = document.getElementById('waterMeterForm');
        const cr = parseFloat(f.elements['currentReading'].value), rd = f.elements['readingDate'].value;
        if (isNaN(cr) || cr < 0) { showNotification('Enter a valid reading.', 'error'); return; }
        if (cr < (tenant.currentWaterMeterReading || 0)) { showNotification('Reading cannot be less than previous.', 'error'); return; }
        const unitsUsed = cr - (tenant.currentWaterMeterReading || 0);
        const wr = { tenantId: tenant.id, tenantName: tenant.name, propertyId: tenant.propertyId, houseNumber: tenant.houseNumber, waterMeterNumber: tenant.waterMeterNumber, readingValue: cr, readingDate: new Date(rd).toISOString(), previousReading: tenant.currentWaterMeterReading, unitsUsed, waterCost: unitsUsed * waterPrice, createdAt: new Date().toISOString() };
        saveData('waterMeterReadings', wr).then(sr => { if (sr) { waterMeterReadings.push(sr); logActivity('record_water_reading', `Recorded water reading of ${cr} for ${tenant.name}`, 'water_reading', sr.id, tenant.propertyId); } });
        updateData('tenants', tenant.id, { currentWaterMeterReading: cr, lastWaterMeterReadingDate: new Date(rd).toISOString() }).then(() => { const i = tenants.findIndex(t => t.id === tenant.id); if (i !== -1) tenants[i].currentWaterMeterReading = cr; });
        if (activeTab === 'tenants') renderAllTenantsList();
        showNotification('Reading recorded!', 'success');
        updatePropertiesList();
    });
    const input = res.modalElement.querySelector('#currentReading');
    if (input) input.addEventListener('input', () => { const cr = parseFloat(input.value) || 0; const lr = tenant.currentWaterMeterReading || 0; const uu = Math.max(0, cr - lr); const wc = uu * waterPrice; const gc = tenant.includeGarbageCollection ? garbageFee : 0; const tot = wc + gc; res.modalElement.querySelector('#unitsUsed').textContent = uu; res.modalElement.querySelector('#waterCost').textContent = wc.toFixed(2); res.modalElement.querySelector('#garbageCost').textContent = gc; res.modalElement.querySelector('#totalCost').textContent = tot.toFixed(2); });
}

function showCreateCustomBillModal() {
    if (!tenants.length) { showNotification('No tenants available.', 'error'); return; }
    const fc = `<div class="text-center mb-8"><h3 class="text-2xl font-bold form-title-gradient bg-clip-text text-transparent mb-2">Create Custom Bill</h3><p class="text-ink-600 dark:text-ink-400">Create a bill with custom amount and description</p></div>
        <form id="customBillForm">
            <div class="mb-6"><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="billTenant">Select Tenant</label><select id="billTenant" name="billTenant" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" required><option value="">Choose...</option>${tenants.map(t => { const p = properties.find(pr => pr.id === t.propertyId); return `<option value="${t.id}">${t.name} - ${p?.name} (${t.houseNumber})</option>`; }).join('')}</select></div>
            <div class="mb-6"><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="billName">Bill Name/Description</label><input type="text" id="billName" name="billName" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" placeholder="e.g., Maintenance Fee, Extra Charges" required></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="billAmount">Amount (Ksh)</label><input type="number" id="billAmount" name="billAmount" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" placeholder="0.00" step="0.01" required></div>
                <div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="billPeriod">Billing Period</label><input type="month" id="billPeriod" name="billPeriod" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" value="${new Date().toISOString().substring(0, 7)}" required></div>
            </div>
            <div class="mb-6"><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="billNotes">Notes (Optional)</label><textarea id="billNotes" name="billNotes" rows="3" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" placeholder="Additional details..."></textarea></div>
        </form>`;
    showModal("Create Custom Bill", fc, 'confirm', () => {
        const f = document.getElementById('customBillForm');
        const tenantId = f.elements['billTenant'].value;
        const billName = f.elements['billName'].value;
        const amount = parseFloat(f.elements['billAmount'].value);
        const period = f.elements['billPeriod'].value;
        const notes = f.elements['billNotes'].value;
        
        if (!tenantId || !billName || isNaN(amount) || amount <= 0 || !period) {
            showNotification('Please fill all required fields correctly.', 'error');
            return;
        }
        
        const tenant = tenants.find(t => t.id === tenantId);
        if (!tenant) { showNotification('Tenant not found.', 'error'); return; }
        
        const property = properties.find(p => p.id === tenant.propertyId);
        const billReference = generateBillReference();
        const newBill = {
            id: generateUniqueId(),
            tenantId: tenant.id,
            tenantName: tenant.name,
            propertyId: tenant.propertyId,
            houseNumber: tenant.houseNumber,
            amount: amount,
            billingPeriod: period,
            billReference: billReference,
            billName: billName,
            notes: notes,
            rentAmount: 0,
            waterAmount: 0,
            garbageAmount: 0,
            createdAt: new Date().toISOString()
        };
        
        saveData('bills', newBill).then(sb => {
            if (sb) {
                bills.push(newBill);
                const newBalance = tenant.outstandingBalance + amount;
                updateData('tenants', tenant.id, { outstandingBalance: newBalance }).then(() => {
                    const i = tenants.findIndex(t => t.id === tenantId);
                    if (i !== -1) tenants[i].outstandingBalance = newBalance;
                });
                logActivity('create_custom_bill', `Created custom bill ${billReference}: ${billName} for ${tenant.name} - ${formatCurrency(amount)}`, 'bill', newBill.id, tenant.propertyId);
                showNotification(`Custom bill ${billReference} created successfully!`, 'success');
                updateGeneratedBillsList();
                updateBillingTenantList();
                renderFinancialSection(document.getElementById('contentSection'));
            }
        });
    });
}

// ============================================================
// LEASES SECTION
// ============================================================
function renderLeasesSection(parentEl) {
    parentEl.innerHTML = `
        <section class="glass-panel rounded-2xl shadow-premium p-8">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div><h3 class="text-3xl font-bold gradient-text">Lease Management</h3><p class="text-ink-600 dark:text-ink-400 mt-2">Manage lease agreements</p></div>
                <button id="addLeaseBtn" class="bg-gradient-to-r from-brass-600 to-brass-700 text-white px-6 py-3 rounded-xl flex items-center font-medium shadow-premium hover:shadow-premium-lg hover:-translate-y-0.5 transition-all duration-300 mt-4 md:mt-0">${icons.PlusCircle}<span class="ml-2">Create Lease</span></button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">${renderStatCard(icons.FileText, "Active Leases", leases.filter(l => l.status === 'active').length, "bg-gradient-to-r from-blue-500 to-blue-600")}${renderStatCard(icons.AlertTriangle, "Expiring Soon", getExpiringLeases().length, "bg-gradient-to-r from-orange-500 to-orange-600")}${renderStatCard(icons.CheckCircle, "Renewed This Month", getRenewedLeases().length, "bg-gradient-to-r from-green-500 to-green-600")}</div>
            <div id="leasesList" class="space-y-6">${leases.length === 0 ? `<div class="text-center py-12"><div class="w-24 h-24 mx-auto mb-6 rounded-full bg-brass-50 dark:bg-white/5 border border-brass-200 dark:border-white/10 flex items-center justify-center text-brass-500 dark:text-brass-300">${icons.FileText}</div><h4 class="text-xl font-semibold text-ink-800 dark:text-ink-200 mb-2">No Leases Yet</h4></div>` : ''}</div>
        </section>
    `;
    document.getElementById('addLeaseBtn').addEventListener('click', () => showAddLeaseModal());
    updateLeasesList();
}

function getExpiringLeases() {
    const d = new Date(); d.setDate(d.getDate() + 30);
    return leases.filter(l => l.status === 'active' && new Date(l.endDate) <= d);
}
function getRenewedLeases() {
    const m = new Date().getMonth(), y = new Date().getFullYear();
    return leases.filter(l => { const rd = new Date(l.renewalDate); return rd.getMonth() === m && rd.getFullYear() === y; });
}

function updateLeasesList() {
    const div = document.getElementById('leasesList');
    if (!div) return;
    if (!leases.length) { div.innerHTML = `<p class="text-ink-600 text-center py-8">No leases yet.</p>`; return; }
    div.innerHTML = leases.map(l => {
        const t = tenants.find(x => x.id === l.tenantId), p = properties.find(x => x.id === l.propertyId);
        const sc = l.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : l.status === 'expired' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
        return `<div class="glass-panel rounded-2xl p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-lg">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div class="flex items-center space-x-4"><div class="w-16 h-16 rounded-xl bg-gradient-to-br from-ink-800 to-ink-900 border border-brass-400/30 flex items-center justify-center text-brass-300 brand-serif font-semibold text-xl">${t?.name?.charAt(0) || 'L'}</div><div><h4 class="text-xl font-bold text-ink-800 dark:text-ink-200">${t?.name || 'Unknown'}</h4><p class="text-ink-600 dark:text-ink-400">${p?.name || 'Unknown'} - ${t?.houseNumber || 'N/A'}</p><div class="flex items-center space-x-4 mt-2"><span>${formatCurrency(l.monthlyRent)}/month</span><span>•</span><span>${l.leaseType}</span></div></div></div>
                <div class="flex items-center space-x-3 mt-4 md:mt-0"><span class="px-3 py-1 rounded-full text-sm font-medium ${sc}">${l.status.charAt(0).toUpperCase() + l.status.slice(1)}</span><button data-lease-id="${l.id}" class="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800" title="View Details">${icons.Edit}</button><button data-lease-id="${l.id}" class="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-800" title="Renew Lease">${icons.CheckCircle}</button><button data-lease-id="${l.id}" class="p-2 rounded-lg bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-800" title="Terminate Lease">${icons.X}</button></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"><div class="bg-white/50 dark:bg-ink-900/50 rounded-lg p-4"><p class="text-sm text-ink-600">Start</p><p class="font-semibold">${formatDate(l.startDate)}</p></div><div class="bg-white/50 dark:bg-ink-900/50 rounded-lg p-4"><p class="text-sm text-ink-600">End</p><p class="font-semibold">${formatDate(l.endDate)}</p></div><div class="bg-white/50 dark:bg-ink-900/50 rounded-lg p-4"><p class="text-sm text-ink-600">Deposit</p><p class="font-semibold">${formatCurrency(l.securityDeposit)}</p></div></div>
        </div>`;
    }).join('');
    div.querySelectorAll('button[data-lease-id]').forEach(b => b.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.leaseId, action = e.currentTarget.title;
        if (action === 'View Details') showLeaseDetailsModal(id);
        else if (action === 'Renew Lease') showRenewLeaseModal(id);
        else if (action === 'Terminate Lease') showTerminateLeaseModal(id);
    }));
}

function showAddLeaseModal() {
    if (!tenants.length) { showNotification('Add tenants first.', 'error'); return; }
    const fc = `<div class="text-center mb-8"><h3 class="text-2xl font-bold form-title-gradient mb-2">Create Lease</h3></div>
        <form id="addLeaseForm">
            <div class="mb-6"><label class="block text-sm font-semibold mb-2" for="leaseTenant">Tenant</label><select id="leaseTenant" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" required><option value="">Choose...</option>${tenants.map(t => { const p = properties.find(pr => pr.id === t.propertyId); return `<option value="${t.id}">${t.name} - ${p?.name} (${t.houseNumber})</option>`; }).join('')}</select></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div><label class="block text-sm font-semibold mb-2" for="leaseType">Type</label><select id="leaseType" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" required>${leaseTypes.map(t => `<option value="${t}">${t}</option>`).join('')}</select></div><div><label class="block text-sm font-semibold mb-2" for="monthlyRent">Monthly Rent (Ksh)</label><input type="number" id="monthlyRent" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" placeholder="0" required></div></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div><label class="block text-sm font-semibold mb-2" for="startDate">Start</label><input type="date" id="startDate" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" value="${new Date().toISOString().substring(0, 10)}" required></div><div><label class="block text-sm font-semibold mb-2" for="endDate">End</label><input type="date" id="endDate" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" required></div></div>
            <div class="mb-6"><label class="block text-sm font-semibold mb-2" for="securityDeposit">Deposit (Ksh)</label><input type="number" id="securityDeposit" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" placeholder="0" required></div>
        </form>`;
    showModal("Create Lease", fc, 'confirm', () => {
        const f = document.getElementById('addLeaseForm');
        const st = tenants.find(t => t.id === f.elements['leaseTenant'].value);
        if (!st) { showNotification('Select a tenant.', 'error'); return; }
        const ld = { tenantId: st.id, propertyId: st.propertyId, leaseType: f.elements['leaseType'].value, monthlyRent: parseFloat(f.elements['monthlyRent'].value), startDate: f.elements['startDate'].value, endDate: f.elements['endDate'].value, securityDeposit: parseFloat(f.elements['securityDeposit'].value), status: 'active', createdAt: new Date().toISOString() };
        saveData('leases', ld).then(sl => { if (sl) { leases.push(sl); logActivity('create_lease', `Created lease for tenant ${st.name}`, 'lease', sl.id, st.propertyId); } });
        showNotification('Lease created!', 'success');
        updateLeasesList();
    });
}

function showLeaseDetailsModal(leaseId) {
    const l = leases.find(x => x.id === leaseId);
    if (!l) return;
    const t = tenants.find(x => x.id === l.tenantId), p = properties.find(x => x.id === l.propertyId);
    showModal("Lease Details", `<div class="grid grid-cols-2 gap-4"><div><p class="text-sm text-ink-600">Tenant</p><p class="font-semibold">${t?.name || 'Unknown'}</p></div><div><p class="text-sm text-ink-600">Property</p><p class="font-semibold">${p?.name || 'Unknown'}</p></div><div><p class="text-sm text-ink-600">Rent</p><p class="font-semibold">${formatCurrency(l.monthlyRent)}</p></div><div><p class="text-sm text-ink-600">Deposit</p><p class="font-semibold">${formatCurrency(l.securityDeposit)}</p></div><div><p class="text-sm text-ink-600">Start</p><p class="font-semibold">${formatDate(l.startDate)}</p></div><div><p class="text-sm text-ink-600">End</p><p class="font-semibold">${formatDate(l.endDate)}</p></div></div>`);
}

function showRenewLeaseModal(leaseId) {
    const l = leases.find(x => x.id === leaseId);
    if (!l) return;
    const fc = `<form id="renewLeaseForm" class="space-y-4"><div><label class="block text-sm font-semibold mb-2" for="newEndDate">New End Date</label><input type="date" id="newEndDate" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" required></div><div><label class="block text-sm font-semibold mb-2" for="newMonthlyRent">New Rent (Ksh)</label><input type="number" id="newMonthlyRent" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" value="${l.monthlyRent}" required></div></form>`;
    showModal("Renew Lease", fc, 'confirm', () => {
        const f = document.getElementById('renewLeaseForm');
        const d = { endDate: f.elements['newEndDate'].value, monthlyRent: parseFloat(f.elements['newMonthlyRent'].value), renewalDate: new Date().toISOString() };
        updateData('leases', leaseId, d).then(() => { const i = leases.findIndex(x => x.id === leaseId); if (i !== -1) leases[i] = { ...leases[i], ...d }; logActivity('renew_lease', `Renewed lease for tenant ${tenants.find(t => t.id === l.tenantId)?.name}`, 'lease', leaseId, l.propertyId); });
        showNotification('Lease renewed!', 'success');
        updateLeasesList();
    });
}

function showTerminateLeaseModal(leaseId) {
    const l = leases.find(x => x.id === leaseId);
    if (!l) return;
    const t = tenants.find(x => x.id === l.tenantId);
    showModal("Terminate Lease", `Terminate lease with ${t?.name || 'tenant'}?`, 'confirm', () => {
        updateData('leases', leaseId, { status: 'terminated', terminationDate: new Date().toISOString() })
            .then(() => logActivity('terminate_lease', `Terminated lease for tenant ${t?.name}`, 'lease', leaseId, l.propertyId));
        showNotification('Lease terminated.', 'success');
        updateLeasesList();
    });
}

// ============================================================
// MAINTENANCE SECTION
// ============================================================
function renderMaintenanceSection(parentEl) {
    parentEl.innerHTML = `
        <section class="glass-panel rounded-2xl shadow-premium p-8">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div><h3 class="text-3xl font-bold gradient-text">Maintenance</h3><p class="text-ink-600 dark:text-ink-400 mt-2">Track property maintenance requests</p></div>
                <button id="addMaintenanceBtn" class="bg-gradient-to-r from-brass-600 to-brass-700 text-white px-6 py-3 rounded-xl flex items-center font-medium shadow-premium hover:shadow-premium-lg hover:-translate-y-0.5 transition-all duration-300 mt-4 md:mt-0">${icons.PlusCircle}<span class="ml-2">New Request</span></button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">${renderStatCard(icons.Wrench, "Open", maintenanceRequests.filter(r => r.status === 'open').length, "bg-gradient-to-r from-orange-500 to-orange-600")}${renderStatCard(icons.Clock, "In Progress", maintenanceRequests.filter(r => r.status === 'in_progress').length, "bg-gradient-to-r from-blue-500 to-blue-600")}${renderStatCard(icons.CheckCircle, "Completed", maintenanceRequests.filter(r => r.status === 'completed').length, "bg-gradient-to-r from-green-500 to-green-600")}${renderStatCard(icons.AlertTriangle, "Urgent", maintenanceRequests.filter(r => r.priority === 'urgent').length, "bg-gradient-to-r from-red-500 to-red-600")}</div>
            <div id="maintenanceList" class="space-y-6">${maintenanceRequests.length === 0 ? `<div class="text-center py-12"><div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-100 to-red-100 flex items-center justify-center">${icons.Wrench}</div><h4 class="text-xl font-semibold mb-2">No Requests</h4></div>` : ''}</div>
        </section>
    `;
    document.getElementById('addMaintenanceBtn').addEventListener('click', () => showAddMaintenanceModal());
    updateMaintenanceList();
}

function showAddMaintenanceModal() {
    const fc = `<div class="text-center mb-8"><h3 class="text-2xl font-bold form-title-gradient mb-2">Create Request</h3></div>
        <form id="addMaintenanceForm">
            <div class="mb-6"><label class="block text-sm font-semibold mb-2" for="maintenanceProperty">Property</label><select id="maintenanceProperty" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" required><option value="">Select...</option>${properties.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}</select></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div><label class="block text-sm font-semibold mb-2" for="maintenanceCategory">Category</label><select id="maintenanceCategory" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" required>${maintenanceCategories.map(c => `<option value="${c}">${c}</option>`).join('')}</select></div><div><label class="block text-sm font-semibold mb-2" for="maintenancePriority">Priority</label><select id="maintenancePriority" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" required><option value="low">Low</option><option value="medium" selected>Medium</option><option value="high">High</option><option value="urgent">Urgent</option></select></div></div>
            <div class="mb-6"><label class="block text-sm font-semibold mb-2" for="maintenanceDescription">Description</label><textarea id="maintenanceDescription" rows="4" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" placeholder="Describe the issue..." required></textarea></div>
            <div class="mb-6"><label class="block text-sm font-semibold mb-2" for="maintenanceCost">Est. Cost (Ksh)</label><input type="number" id="maintenanceCost" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" placeholder="0"></div>
        </form>`;
    showModal("Create Request", fc, 'confirm', () => {
        const f = document.getElementById('addMaintenanceForm');
        const md = { propertyId: f.elements['maintenanceProperty'].value, category: f.elements['maintenanceCategory'].value, priority: f.elements['maintenancePriority'].value, description: f.elements['maintenanceDescription'].value, estimatedCost: parseFloat(f.elements['maintenanceCost'].value) || 0, status: 'open', createdAt: new Date().toISOString() };
        saveData('maintenanceRequests', md).then(sr => { if (sr) { maintenanceRequests.push(sr); logActivity('create_maintenance', `Created maintenance request: ${md.description}`, 'maintenance', sr.id, md.propertyId); } });
        showNotification('Request created!', 'success');
        updateMaintenanceList();
    });
}

function updateMaintenanceList() {
    const div = document.getElementById('maintenanceList');
    if (!div) return;
    if (!maintenanceRequests.length) { div.innerHTML = `<p class="text-ink-600 text-center py-8">No requests.</p>`; return; }
    div.innerHTML = maintenanceRequests.map(r => {
        const p = properties.find(x => x.id === r.propertyId);
        const pc = r.priority === 'urgent' ? 'bg-red-100 text-red-800' : r.priority === 'high' ? 'bg-orange-100 text-orange-800' : r.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800';
        const sc = r.status === 'open' ? 'bg-orange-100 text-orange-800' : r.status === 'in_progress' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';
        return `<div class="glass-panel rounded-2xl p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-lg">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div class="flex items-center space-x-4"><div class="w-16 h-16 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-xl">${r.category.charAt(0)}</div><div><h4 class="text-xl font-bold">${r.category}</h4><p class="text-ink-600">${p?.name || 'Unknown'}</p><p class="text-sm text-ink-500 mt-1">${r.description}</p></div></div>
                <div class="flex items-center space-x-3 mt-4 md:mt-0"><span class="px-3 py-1 rounded-full text-sm font-medium ${pc}">${r.priority.charAt(0).toUpperCase() + r.priority.slice(1)}</span><span class="px-3 py-1 rounded-full text-sm font-medium ${sc}">${r.status.replace('_', ' ').replace(/^\w/, c => c.toUpperCase())}</span><button data-request-id="${r.id}" class="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800" title="Update">${icons.Edit}</button></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"><div class="bg-white/50 dark:bg-ink-900/50 rounded-lg p-4"><p class="text-sm text-ink-600">Created</p><p class="font-semibold">${formatDate(r.createdAt)}</p></div><div class="bg-white/50 dark:bg-ink-900/50 rounded-lg p-4"><p class="text-sm text-ink-600">Est. Cost</p><p class="font-semibold">${formatCurrency(r.estimatedCost)}</p></div><div class="bg-white/50 dark:bg-ink-900/50 rounded-lg p-4"><p class="text-sm text-ink-600">Category</p><p class="font-semibold">${r.category}</p></div></div>
        </div>`;
    }).join('');
    div.querySelectorAll('button[data-request-id]').forEach(b => b.addEventListener('click', (e) => showUpdateMaintenanceModal(e.currentTarget.dataset.requestId)));
}

function showUpdateMaintenanceModal(requestId) {
    const r = maintenanceRequests.find(x => x.id === requestId);
    if (!r) return;
    const fc = `<form id="updateMaintenanceForm" class="space-y-4"><div><label class="block text-sm font-semibold mb-2" for="updateStatus">Status</label><select id="updateStatus" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80"><option value="open" ${r.status === 'open' ? 'selected' : ''}>Open</option><option value="in_progress" ${r.status === 'in_progress' ? 'selected' : ''}>In Progress</option><option value="completed" ${r.status === 'completed' ? 'selected' : ''}>Completed</option></select></div><div><label class="block text-sm font-semibold mb-2" for="actualCost">Actual Cost (Ksh)</label><input type="number" id="actualCost" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" value="${r.actualCost || ''}"></div><div><label class="block text-sm font-semibold mb-2" for="notes">Notes</label><textarea id="notes" rows="3" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80">${r.notes || ''}</textarea></div></form>`;
    showModal("Update Request", fc, 'confirm', () => {
        const f = document.getElementById('updateMaintenanceForm');
        const d = { status: f.elements['updateStatus'].value, actualCost: parseFloat(f.elements['actualCost'].value) || 0, notes: f.elements['notes'].value, updatedAt: new Date().toISOString() };
        updateData('maintenanceRequests', requestId, d).then(() => {
            const changes = [];
            if (r.status !== d.status) changes.push(`status: "${r.status}" → "${d.status}"`);
            if (r.actualCost !== d.actualCost && d.actualCost) changes.push(`cost: ${formatCurrency(r.actualCost || 0)} → ${formatCurrency(d.actualCost)}`);
            if (r.notes !== d.notes && d.notes) changes.push(`notes added`);
            logActivity('update_maintenance', `Updated maintenance request #${requestId.substring(0,6)} (${changes.join('; ')})`, 'maintenance', requestId, r.propertyId); });
        showNotification('Request updated!', 'success');
        updateMaintenanceList();
    });
}

// ============================================================
// BILLING SECTION
// ============================================================
function renderBillingSection(parentEl) {
    parentEl.innerHTML = `
        <section class="glass-panel rounded-2xl shadow-premium p-8">
            <div class="mb-8">
                <h3 class="text-3xl font-bold gradient-text mb-2">Generate Bills</h3>
                <p class="text-ink-600 dark:text-ink-400">Select tenants and generate monthly bills with water meter readings</p>
            </div>
            
            <!-- Quick Stats -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="glass-panel rounded-xl p-4 border-l-4 border-blue-500">
                    <p class="text-sm text-ink-600 dark:text-ink-400">Selected Tenants</p>
                    <p class="text-2xl font-bold text-ink-900 dark:text-white" id="selectedCount">0</p>
                </div>
                <div class="glass-panel rounded-xl p-4 border-l-4 border-green-500">
                    <p class="text-sm text-ink-600 dark:text-ink-400">Estimated Total</p>
                    <p class="text-2xl font-bold text-ink-900 dark:text-white" id="estimatedTotal">Ksh 0</p>
                </div>
                <div class="glass-panel rounded-xl p-4 border-l-4 border-brass-500">
                    <p class="text-sm text-ink-600 dark:text-ink-400">Current Month</p>
                    <p class="text-2xl font-bold text-ink-900 dark:text-white">${new Date().toLocaleDateString('en-KE', { month: 'long', year: 'numeric' })}</p>
                </div>
            </div>

            <!-- Filters -->
            <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-6">
                <div class="relative flex-grow">
                    <input type="text" id="billingTenantSearch" placeholder="Search tenants by name or house..." class="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" value="${billingTenantSearchQuery}">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-ink-400">${icons.Search}</div>
                </div>
                <select id="billingPropertyFilter" class="w-full md:w-auto p-3 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80">
                    <option value="">All Properties</option>
                    ${properties.map(p => `<option value="${p.id}" ${selectedPropertyForBillingFilter === p.id ? 'selected' : ''}>${p.name}</option>`).join('')}
                </select>
                <button id="generateBillsBtn" class="bg-gradient-to-r from-brass-600 to-brass-700 text-white px-6 py-3 rounded-xl flex items-center justify-center hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 font-medium">
                    ${icons.PlusCircle}<span class="ml-2">Generate Selected Bills</span>
                </button>
                ${userProfile?.role === 'owner' || userProfile?.role === 'admin' ? `
                <button id="createCustomBillBtn" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl flex items-center justify-center hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 font-medium">
                    ${icons.FileText}<span class="ml-2">Create Custom Bill</span>
                </button>
                ` : ''}
            </div>

            <!-- Tenants List -->
            <div id="tenantsToBillList" class="space-y-4"></div>

            <!-- Bills History -->
            <div class="mt-8 border-t border-ink-200/50 dark:border-ink-700/50 pt-6">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 class="text-xl font-bold text-ink-800 dark:text-ink-200 mb-4 md:mb-0">Recent Bills</h3>
                    <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
                        <input type="month" id="billingHistoryMonthFilter" value="${billingHistoryFilterMonth}" class="w-full md:w-auto p-3 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80">
                        <button id="showAllBillsBtn" class="bg-ink-200 dark:bg-ink-700 text-ink-800 dark:text-ink-200 px-4 py-2 rounded-lg hover:bg-ink-300 dark:hover:bg-ink-600 transition">Show All</button>
                        <button id="exportBillsCsvBtn" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center justify-center">${icons.Download}<span class="ml-1">CSV</span></button>
                    </div>
                </div>
                <div id="billsHistoryList" class="space-y-4"></div>
            </div>
        </section>
    `;
    
    document.getElementById('billingTenantSearch').addEventListener('input', (e) => { billingTenantSearchQuery = e.target.value; updateBillingTenantList(); });
    document.getElementById('billingPropertyFilter').addEventListener('change', (e) => { selectedPropertyForBillingFilter = e.target.value; updateBillingTenantList(); });
    document.getElementById('generateBillsBtn').addEventListener('click', handleGenerateBills);
    
    const customBillBtn = document.getElementById('createCustomBillBtn');
    if (customBillBtn) {
        customBillBtn.addEventListener('click', () => showCreateCustomBillModal());
    }
    
    document.getElementById('billingHistoryMonthFilter').addEventListener('change', (e) => { billingHistoryFilterMonth = e.target.value; updateGeneratedBillsList(); });
    document.getElementById('showAllBillsBtn').addEventListener('click', () => { billingHistoryFilterMonth = ''; document.getElementById('billingHistoryMonthFilter').value = ''; updateGeneratedBillsList(); });
    const csvBtn = document.getElementById('exportBillsCsvBtn');
    if (csvBtn) csvBtn.addEventListener('click', exportBillsToCsv);
    updateBillingTenantList();
    updateGeneratedBillsList();
}

function updateBillingTenantDropdown() {} // Kept for compatibility

function updateBillingSummary() {
    const checkboxes = document.querySelectorAll('.tenant-checkbox:checked');
    const selectedCount = checkboxes.length;
    let estimatedTotal = 0;
    
    checkboxes.forEach(cb => {
        estimatedTotal += parseFloat(cb.dataset.total) || 0;
    });
    
    const countEl = document.getElementById('selectedCount');
    const totalEl = document.getElementById('estimatedTotal');
    
    if (countEl) countEl.textContent = selectedCount;
    if (totalEl) totalEl.textContent = `Ksh ${estimatedTotal.toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function updateBillingTenantList() {
    const div = document.getElementById('tenantsToBillList');
    if (!div) return;
    const ft = tenants.filter(t => t.name.toLowerCase().includes(billingTenantSearchQuery.toLowerCase()) || t.houseNumber.toLowerCase().includes(billingTenantSearchQuery.toLowerCase())).filter(t => selectedPropertyForBillingFilter === '' || t.propertyId === selectedPropertyForBillingFilter);
    if (!ft.length) { div.innerHTML = `<p class="text-ink-600 text-center py-8">No tenants to bill.</p>`; return; }
    div.innerHTML = `<p class="text-ink-600 mb-4">Select tenants to bill:</p><div class="overflow-x-auto glass-panel rounded-xl"><table class="min-w-full"><thead class="bg-ink-50 dark:bg-ink-800/50"><tr><th class="py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider"><input type="checkbox" id="selectAllTenants" class="form-checkbox h-4 w-4 text-brass-600 rounded"></th><th class="py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider">Tenant</th><th class="py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider">House</th><th class="py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider">Property</th><th class="py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider">Balance</th><th class="py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider">Last Billed</th></tr></thead><tbody class="divide-y divide-ink-200 dark:divide-ink-700">${ft.map(t => { const lb = t.lastBilledDate ? new Date(t.lastBilledDate).toLocaleDateString() : 'Never'; const pn = properties.find(p => p.id === t.propertyId)?.name || 'N/A'; const bc = t.outstandingBalance > 0 ? 'text-red-600' : 'text-green-600'; return `<tr class="hover:bg-ink-50 dark:hover:bg-ink-800"><td class="py-4 px-6"><input type="checkbox" name="tenantToBill" value="${t.id}" class="form-checkbox h-4 w-4 text-brass-600 rounded"></td><td class="py-4 px-6 text-sm">${t.name}</td><td class="py-4 px-6 text-sm">${t.houseNumber}</td><td class="py-4 px-6 text-sm text-ink-600">${pn}</td><td class="py-4 px-6 text-sm font-medium ${bc}">${formatCurrency(t.outstandingBalance)}</td><td class="py-4 px-6 text-sm text-ink-500">${lb}</td></tr>`; }).join('')}</tbody></table></div>`;
    document.getElementById('selectAllTenants').addEventListener('change', (e) => document.querySelectorAll('input[name="tenantToBill"]').forEach(cb => cb.checked = e.target.checked));
}

async function handleGenerateBills() {
    const ids = Array.from(document.querySelectorAll('input[name="tenantToBill"]:checked')).map(cb => cb.value);
    if (!ids.length) { showNotification("Select tenants to bill.", "error"); return; }
    const my = new Date().toISOString().substring(0, 7);
    const already = bills.filter(b => ids.includes(b.tenantId) && b.billingPeriod === my).map(b => tenants.find(t => t.id === b.tenantId)?.name).filter(Boolean);
    if (already.length) { showNotification(`Already billed: ${already.join(', ')}`, 'error'); return; }
    await showWaterMeterReadingForBilling(tenants.filter(t => ids.includes(t.id)), my);
}

async function showWaterMeterReadingForBilling(tenantsToBill, currentMonthYear) {
    if (!tenantsToBill.length) return;
    const tenant = tenantsToBill[0], p = properties.find(x => x.id === tenant.propertyId);
    const waterPrice = p?.waterPricePerUnit || globalSettings.waterPricePerUnit;
    const garbageFee = p?.garbageCollectionFee || globalSettings.garbageCollectionFee;
    const fc = document.createElement('div');
    fc.innerHTML = `<form id="waterMeterBillingForm">
        <div class="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg"><h4 class="text-lg font-semibold mb-2">${tenant.name}</h4><p>House: ${tenant.houseNumber} | ${p?.name || ''} | Meter: ${tenant.waterMeterNumber || 'N/A'}</p><p class="text-xs mt-1">Water: Ksh ${waterPrice}/unit | Garbage: Ksh ${garbageFee}/month</p></div>
        <div class="mb-6"><label class="block text-sm font-semibold mb-2" for="currentReading">Current Reading</label><input type="number" id="currentReading" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" placeholder="Enter reading" required><small class="text-ink-500 block mt-2">Last: ${tenant.currentWaterMeterReading || 0}</small></div>
        <div class="mb-6"><label class="block text-sm font-semibold mb-2" for="readingDate">Date</label><input type="date" id="readingDate" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" value="${new Date().toISOString().substring(0, 10)}"></div>
        <div class="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg"><h4 class="text-lg font-semibold mb-2">Bill Calculation</h4><p>Rent: Ksh ${tenant.amountCharged} | Water: <span id="unitsUsed">0</span> units = Ksh <span id="waterCost">0</span> | Garbage: Ksh <span id="garbageCost">${tenant.includeGarbageCollection ? garbageFee : 0}</span></p><hr class="my-2"><p class="font-bold text-lg">Total: Ksh <span id="totalBill">${tenant.amountCharged}</span></p></div>
    </form>`;
    const title = `Bill for ${tenant.name} (${tenantsToBill.indexOf(tenant) + 1} of ${tenantsToBill.length})`;
    showModal(title, fc, 'confirm', (closeModal) => {
        handleGenerateBillForSingleTenant(document.getElementById('waterMeterBillingForm'), tenant, currentMonthYear, () => {
            closeModal();
            const remaining = tenantsToBill.slice(1);
            if (remaining.length) showWaterMeterReadingForBilling(remaining, currentMonthYear);
            else { showNotification('All bills generated!', 'success'); updateBillingTenantList(); updateGeneratedBillsList(); }
        });
    });
    const input = document.getElementById('currentReading');
    if (input) input.addEventListener('input', () => { const cr = parseFloat(input.value) || 0; const lr = tenant.currentWaterMeterReading || 0; const uu = Math.max(0, cr - lr); const wc = uu * waterPrice; const gc = tenant.includeGarbageCollection ? garbageFee : 0; const tot = tenant.amountCharged + wc + gc; document.getElementById('unitsUsed').textContent = uu; document.getElementById('waterCost').textContent = wc.toFixed(2); document.getElementById('garbageCost').textContent = gc; document.getElementById('totalBill').textContent = tot.toFixed(2); });
}

function handleGenerateBillForSingleTenant(form, tenant, currentMonthYear, callback) {
    const cr = parseFloat(form.elements['currentReading'].value), rd = form.elements['readingDate'].value;
    if (isNaN(cr) || cr < 0) { showNotification('Enter a valid reading.', 'error'); return; }
    if (cr < (tenant.currentWaterMeterReading || 0)) { showNotification('Reading cannot be less.', 'error'); return; }
    const p = properties.find(x => x.id === tenant.propertyId);
    const waterPrice = p?.waterPricePerUnit || globalSettings.waterPricePerUnit;
    const garbageFee = p?.garbageCollectionFee || globalSettings.garbageCollectionFee;
    const wc = (cr - (tenant.currentWaterMeterReading || 0)) * waterPrice, gc = tenant.includeGarbageCollection ? garbageFee : 0, tot = tenant.amountCharged + wc + gc;
    const wr = { tenantId: tenant.id, tenantName: tenant.name, propertyId: tenant.propertyId, houseNumber: tenant.houseNumber, waterMeterNumber: tenant.waterMeterNumber, readingValue: cr, readingDate: new Date(rd).toISOString(), previousReading: tenant.currentWaterMeterReading, unitsUsed: cr - (tenant.currentWaterMeterReading || 0), waterCost: wc, createdAt: new Date().toISOString() };
    saveData('waterMeterReadings', wr).then(sr => { if (sr) waterMeterReadings.push(sr); });
    const nb = tenant.outstandingBalance + tot;
    updateData('tenants', tenant.id, { currentWaterMeterReading: cr, lastWaterMeterReadingDate: new Date(rd).toISOString(), outstandingBalance: nb, lastBilledDate: new Date().toISOString() }).then(() => { const i = tenants.findIndex(t => t.id === tenant.id); if (i !== -1) { tenants[i].currentWaterMeterReading = cr; tenants[i].outstandingBalance = nb; }});
    const billReference = generateBillReference();
    const nb2 = { id: generateUniqueId(), tenantId: tenant.id, tenantName: tenant.name, propertyId: tenant.propertyId, houseNumber: tenant.houseNumber, amount: tot, billingPeriod: currentMonthYear, billReference: billReference, rentAmount: tenant.amountCharged, waterAmount: wc, garbageAmount: gc, waterUnitsUsed: cr - (tenant.currentWaterMeterReading || 0), createdAt: new Date().toISOString() };
    saveData('bills', nb2).then(sb => { if (sb) { bills.push(sb); logActivity('generate_bill', `Generated bill ${billReference} of ${formatCurrency(tot)} for ${tenant.name}`, 'bill', sb.id, tenant.propertyId); } updateGeneratedBillsList(); });
    showNotification(`Bill for ${tenant.name}: ${formatCurrency(tot)}`, 'success');
    callback();
}

function updateGeneratedBillsList() {
    const div = document.getElementById('billsHistoryList');
    if (!div) return;
    let fb = bills;
    if (billingHistoryFilterMonth) fb = bills.filter(b => b.billingPeriod === billingHistoryFilterMonth);
    fb.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    if (!fb.length) { div.innerHTML = `<p class="text-ink-600 text-center py-8">No bills found.</p>`; return; }
    div.innerHTML = `<div class="overflow-x-auto"><table class="min-w-full bg-white rounded-lg shadow-sm"><thead class="bg-ink-100"><tr><th class="py-3 px-4 text-left text-xs font-medium text-ink-500 uppercase">Reference</th><th class="py-3 px-4 text-left text-xs font-medium text-ink-500 uppercase">Tenant</th><th class="py-3 px-4 text-left text-xs font-medium text-ink-500 uppercase">House</th><th class="py-3 px-4 text-left text-xs font-medium text-ink-500 uppercase">Property</th><th class="py-3 px-4 text-left text-xs font-medium text-ink-500 uppercase">Amount</th><th class="py-3 px-4 text-left text-xs font-medium text-ink-500 uppercase">Period</th><th class="py-3 px-4 text-left text-xs font-medium text-ink-500 uppercase">Date</th><th class="py-3 px-4 text-left text-xs font-medium text-ink-500 uppercase">Actions</th></tr></thead><tbody class="divide-y divide-ink-200">${fb.map(b => { const pn = properties.find(p => p.id === b.propertyId)?.name || 'N/A'; const cd = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt); const gd = !isNaN(cd) ? cd.toLocaleDateString('en-KE') : ''; return `<tr class="hover:bg-ink-50"><td class="py-3 px-4 text-sm font-mono text-xs">${b.billReference || 'N/A'}</td><td class="py-3 px-4 text-sm">${b.tenantName}</td><td class="py-3 px-4 text-sm">${b.houseNumber}</td><td class="py-3 px-4 text-sm">${pn}</td><td class="py-3 px-4 text-sm">${formatCurrency(b.amount)}</td><td class="py-3 px-4 text-sm">${b.billingPeriod}</td><td class="py-3 px-4 text-sm">${gd}</td><td class="py-3 px-4 text-sm"><div class="flex space-x-2"><button data-bill-id="${b.id}" class="generate-pdf-btn text-blue-600 hover:text-blue-800" title="PDF">${icons.FileText}</button><button data-bill-id="${b.id}" class="delete-bill-btn text-red-600 hover:text-red-800" title="Delete">${icons.Trash2}</button></div></td></tr>`; }).join('')}</tbody></table></div>`;
    div.querySelectorAll('.delete-bill-btn').forEach(b => b.addEventListener('click', (e) => handleDeleteBill(e.currentTarget.dataset.billId)));
    div.querySelectorAll('.generate-pdf-btn').forEach(b => b.addEventListener('click', (e) => { const bi = bills.find(x => x.id === e.currentTarget.dataset.billId); if (bi) generateReceiptPdf(bi); }));
}

function exportBillsToCsv() {
    if (!bills.length) { showNotification('No bills to export.', 'error'); return; }
    const headers = ['Tenant Name', 'House', 'Property', 'Billing Period', 'Rent Amount', 'Water Amount', 'Garbage Amount', 'Total Amount', 'Date Generated'];
    const rows = bills.map(b => {
        const pn = properties.find(p => p.id === b.propertyId)?.name || 'N/A';
        const cd = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt);
        return [b.tenantName, b.houseNumber, pn, b.billingPeriod, b.rentAmount || 0, b.waterAmount || 0, b.garbageAmount || 0, b.amount, cd.toISOString().split('T')[0]];
    });
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bills-export-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
    logActivity('export_bills', `Exported ${bills.length} bills to CSV.`, null, null, null);
    showNotification(`${bills.length} bills exported to CSV!`, 'success');
}

function handleDeleteBill(billId) {
    const b = bills.find(x => x.id === billId);
    if (!b) return;
    if (userProfile?.role === 'admin' && !userProfile.assignedProperties.includes(b.propertyId)) {
        showNotification("You don't have permission to delete this bill.", "error");
        return;
    }
    showModal("Delete Bill", `Delete bill for ${b.tenantName} (${b.billingPeriod})? Balance will be adjusted.`, 'confirm', () => {
        deleteData('bills', billId);
        bills = bills.filter(x => x.id !== billId);
        const tu = tenants.find(t => t.id === b.tenantId);
        if (tu) { const nb = tu.outstandingBalance - b.amount; updateData('tenants', tu.id, { outstandingBalance: nb }).then(() => tu.outstandingBalance = nb); }
        logActivity('delete_bill', `Deleted bill for ${b.tenantName} (${b.billingPeriod})`, 'bill', billId, b.propertyId);
        showNotification("Bill deleted.", "success");
        if (activeTab === 'tenants') renderAllTenantsList();
        updatePropertiesList(); updateGeneratedBillsList(); renderFinancialSection(document.getElementById('contentSection'));
    });
}

// ============================================================
// FINANCIAL SECTION
// ============================================================
function renderFinancialSection(parentEl) {
    const totalRentExpected = tenants.reduce((s, t) => s + t.amountCharged, 0);
    const totalBilled = bills.reduce((s, b) => s + b.amount, 0);
    const totalPaid = payments.reduce((s, p) => s + p.amount, 0);
    const totalOutstanding = totalBilled - totalPaid;
    parentEl.innerHTML = `
        <section class="glass-panel rounded-2xl shadow-premium p-8">
            <div class="flex justify-between items-center mb-6"><h3 class="text-2xl font-bold text-ink-800 dark:text-ink-200">Financial Overview</h3></div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">${renderStatCard(icons.DollarSign, "Monthly Rent Expected", `Ksh ${totalRentExpected.toFixed(2)}`)}${renderStatCard(icons.FileText, "Total Billed", `Ksh ${totalBilled.toFixed(2)}`)}${renderStatCard(icons.Wallet, "Total Paid", `Ksh ${totalPaid.toFixed(2)}`)}${renderStatCard(icons.DollarSign, "Outstanding", `Ksh ${totalOutstanding.toFixed(2)}`)}</div>
            <div class="mt-8 border-t border-ink-200/50 dark:border-ink-700/50 pt-6">
                <h3 class="text-xl font-bold text-ink-800 dark:text-ink-200 mb-4">Payment History</h3>
                <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4"><select id="financePropertyFilter" class="w-full md:w-auto border-ink-300 rounded-lg shadow-sm"><option value="">Filter by Property</option>${properties.map(p => `<option value="${p.id}" ${selectedPropertyForFinanceFilter === p.id ? 'selected' : ''}>${p.name}</option>`).join('')}</select></div>
                <div id="paymentHistoryList" class="space-y-4"></div>
            </div>
        </section>`;
    document.getElementById('financePropertyFilter').addEventListener('change', (e) => { selectedPropertyForFinanceFilter = e.target.value; updatePaymentHistoryList(); });
    updatePaymentHistoryList();
}

function updatePaymentHistoryList() {
    const div = document.getElementById('paymentHistoryList');
    if (!div) return;
    let fp = payments;
    if (selectedPropertyForFinanceFilter) fp = payments.filter(p => p.propertyId === selectedPropertyForFinanceFilter);
    fp.sort((a, b) => new Date(b.paymentDate) - new Date(a.paymentDate));
    if (!fp.length) { div.innerHTML = `<p class="text-ink-600 text-center py-8">No payments found.</p>`; return; }
    div.innerHTML = `<div class="overflow-x-auto"><table class="min-w-full"><thead class="bg-ink-50 dark:bg-ink-800/50"><tr><th class="py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider">Tenant</th><th class="py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider">Property</th><th class="py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider">Amount</th><th class="py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider">Date</th></tr></thead><tbody class="divide-y divide-ink-200 dark:divide-ink-700">${fp.map(p => { const pn = properties.find(x => x.id === p.propertyId)?.name || 'N/A'; return `<tr class="hover:bg-ink-50"><td class="py-4 px-6 text-sm">${p.tenantName}</td><td class="py-4 px-6 text-sm text-ink-600">${pn}</td><td class="py-4 px-6 text-sm font-medium">${formatCurrency(p.amount)}</td><td class="py-4 px-6 text-sm text-ink-600">${new Date(p.paymentDate).toLocaleDateString()}</td></tr>`; }).join('')}</tbody></table></div>`;
}

// ============================================================
// REPORTS SECTION
// ============================================================
function renderReportsSection(parentEl) {
    parentEl.innerHTML = `
        <section class="glass-panel rounded-2xl shadow-premium p-8">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div><h3 class="text-3xl font-bold gradient-text">Reports & Analytics</h3><p class="text-ink-600 dark:text-ink-400 mt-2">Comprehensive business insights</p></div>
                <button id="exportReportBtn" class="bg-gradient-to-r from-brass-600 to-brass-700 text-white px-6 py-3 rounded-xl flex items-center font-medium shadow-premium hover:shadow-premium-lg hover:-translate-y-0.5 transition-all duration-300 mt-4 md:mt-0">${icons.Download}<span class="ml-2">Export Report</span></button>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="glass-panel rounded-2xl p-6"><h4 class="text-xl font-bold mb-4">Revenue Analytics</h4><canvas id="revenueAnalyticsChart" width="400" height="300"></canvas></div>
                <div class="glass-panel rounded-2xl p-6"><h4 class="text-xl font-bold mb-4">Occupancy Rate</h4><canvas id="occupancyChart" width="400" height="300"></canvas></div>
                <div class="glass-panel rounded-2xl p-6"><h4 class="text-xl font-bold mb-4">Maintenance Costs</h4><canvas id="maintenanceCostChart" width="400" height="300"></canvas></div>
                <div class="glass-panel rounded-2xl p-6"><h4 class="text-xl font-bold mb-4">Key Metrics</h4><div class="space-y-4"><div class="flex justify-between p-4 bg-white/50 dark:bg-ink-900/50 rounded-lg"><span>Average Rent</span><span class="font-bold">${formatCurrency(getAverageRent())}</span></div><div class="flex justify-between p-4 bg-white/50 dark:bg-ink-800/50 rounded-lg"><span>Collection Rate</span><span class="font-bold">${getCollectionRate()}%</span></div><div class="flex justify-between p-4 bg-white/50 dark:bg-ink-900/50 rounded-lg"><span>Vacancy Rate</span><span class="font-bold">${getVacancyRate()}%</span></div><div class="flex justify-between p-4 bg-white/50 dark:bg-ink-900/50 rounded-lg"><span>Maintenance Efficiency</span><span class="font-bold">${getMaintenanceEfficiency()}%</span></div></div></div>
            </div>
        </section>`;
    document.getElementById('exportReportBtn').addEventListener('click', () => exportReport());
    setTimeout(() => initializeReportCharts(), 100);
}

function getAverageRent() { return tenants.length ? tenants.reduce((s, t) => s + t.amountCharged, 0) / tenants.length : 0; }
function getCollectionRate() { const te = bills.reduce((s, b) => s + b.amount, 0), tc = payments.reduce((s, p) => s + p.amount, 0); return te > 0 ? Math.round((tc / te) * 100) : 0; }
function getVacancyRate() { const tu = tenants.length, ou = tenants.filter(t => t.outstandingBalance <= t.amountCharged).length; return tu > 0 ? Math.round(((tu - ou) / tu) * 100) : 0; }
function getMaintenanceEfficiency() { const tr = maintenanceRequests.length, cr = maintenanceRequests.filter(r => r.status === 'completed').length; return tr > 0 ? Math.round((cr / tr) * 100) : 0; }

function initializeReportCharts() {
    const rc = document.getElementById('revenueAnalyticsChart');
    if (rc) { const md = getMonthlyRevenueData(); charts.revenueAnalytics = createChart('revenueAnalyticsChart', { type: 'bar', data: { labels: md.labels, datasets: [{ label: 'Revenue', data: md.data, backgroundColor: 'rgba(79, 70, 229, 0.8)', borderColor: 'rgba(79, 70, 229, 1)', borderWidth: 1 }] }, options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { callback: v => formatCurrency(v) } } } } }); }
    const oc = document.getElementById('occupancyChart');
    if (oc) { const od = getOccupancyData(); charts.occupancy = createChart('occupancyChart', { type: 'doughnut', data: { labels: ['Occupied', 'Vacant'], datasets: [{ data: od, backgroundColor: ['rgba(34, 197, 94, 0.8)', 'rgba(239, 68, 68, 0.8)'], borderWidth: 0 }] }, options: { responsive: true, plugins: { legend: { position: 'bottom' } } } }); }
    const mc = document.getElementById('maintenanceCostChart');
    if (mc) { const mcd = getMaintenanceCostData(); charts.maintenanceCost = createChart('maintenanceCostChart', { type: 'line', data: { labels: mcd.labels, datasets: [{ label: 'Costs', data: mcd.data, borderColor: 'rgba(245, 101, 101, 1)', backgroundColor: 'rgba(245, 101, 101, 0.1)', tension: 0.4, fill: true }] }, options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { callback: v => formatCurrency(v) } } } } }); }
}

function getOccupancyData() { const tu = tenants.length, ou = tenants.filter(t => t.outstandingBalance <= t.amountCharged).length; return [ou, tu - ou]; }

function getMaintenanceCostData() {
    const labels = [], data = [];
    for (let i = 5; i >= 0; i--) { const d = new Date(); d.setMonth(d.getMonth() - i); const my = d.toISOString().substring(0, 7); labels.push(d.toLocaleDateString('en-KE', { month: 'short', year: 'numeric' })); data.push(maintenanceRequests.filter(r => r.createdAt.startsWith(my)).reduce((s, r) => s + (r.actualCost || r.estimatedCost), 0)); }
    return { labels, data };
}

function exportReport() {
    const rd = { properties: properties.length, tenants: tenants.length, activeLeases: leases.filter(l => l.status === 'active').length, totalRevenue: payments.reduce((s, p) => s + p.amount, 0), outstandingBalance: tenants.reduce((s, t) => s + t.outstandingBalance, 0), maintenanceRequests: maintenanceRequests.length, averageRent: getAverageRent(), collectionRate: getCollectionRate(), vacancyRate: getVacancyRate(), maintenanceEfficiency: getMaintenanceEfficiency(), generatedAt: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(rd, null, 2)], { type: 'application/json' }), url = URL.createObjectURL(blob), a = document.createElement('a');
    logActivity('export_report', 'User exported a summary report.', null, null, null);
    a.href = url; a.download = `rental-report-${new Date().toISOString().split('T')[0]}.json`; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
    showNotification('Report exported!', 'success');
}

// ============================================================
// SETTINGS SECTION
// ============================================================
async function renderSettingsSection(parentEl) {
    // Load global settings from Firestore
    await loadGlobalSettings();
    
    parentEl.innerHTML = `
        <section class="glass-panel rounded-2xl shadow-premium p-8">
            <div class="mb-8"><h3 class="text-3xl font-bold gradient-text">Settings & Data</h3><p class="text-ink-600 dark:text-ink-400 mt-2">Manage your data and preferences</p></div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="glass-panel rounded-2xl p-6"><h4 class="text-xl font-bold mb-6">Data Backup</h4><div class="space-y-4"><button id="exportDataBtn" class="w-full bg-gradient-to-r from-brass-600 to-brass-700 text-white px-6 py-3 rounded-xl flex items-center justify-center font-medium hover:shadow-premium-lg hover:-translate-y-0.5">${icons.Download}<span class="ml-2">Export All Data</span></button><button id="importDataBtn" class="w-full bg-ink-200 dark:bg-ink-800 text-ink-800 dark:text-ink-200 px-6 py-3 rounded-xl flex items-center justify-center font-medium hover:bg-ink-300 dark:hover:bg-ink-700">${icons.Upload}<span class="ml-2">Import Data</span></button><input type="file" id="importFileInput" accept=".json" class="hidden"></div></div>
                <div class="glass-panel rounded-2xl p-6"><h4 class="text-xl font-bold mb-6">System Info</h4><div class="space-y-4"><div class="flex justify-between p-4 bg-white/50 dark:bg-ink-900/50 rounded-lg"><span>Properties</span><span class="font-bold">${properties.length}</span></div><div class="flex justify-between p-4 bg-white/50 dark:bg-ink-900/50 rounded-lg"><span>Tenants</span><span class="font-bold">${tenants.length}</span></div><div class="flex justify-between p-4 bg-white/50 dark:bg-ink-900/50 rounded-lg"><span>Leases</span><span class="font-bold">${leases.length}</span></div><div class="flex justify-between p-4 bg-white/50 dark:bg-ink-900/50 rounded-lg"><span>Data</span><span class="font-bold text-green-600">Cloud (Firestore)</span></div></div></div>
                ${userProfile?.role === 'owner' || userProfile?.role === 'admin' ? `
                <div class="glass-panel rounded-2xl p-6 lg:col-span-2"><h4 class="text-xl font-bold mb-6">Billing Rates Configuration</h4><p class="text-sm text-ink-600 dark:text-ink-400 mb-4">Set default rates for water and garbage collection. These can be overridden per property.</p>
                <form id="globalSettingsForm" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="globalWaterPrice">Default Water Price per Unit (Ksh)</label><input type="number" id="globalWaterPrice" name="globalWaterPrice" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" value="${globalSettings.waterPricePerUnit}" placeholder="200" required></div>
                    <div><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2" for="globalGarbageFee">Default Garbage Collection Fee (Ksh)</label><input type="number" id="globalGarbageFee" name="globalGarbageFee" class="w-full p-4 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition" value="${globalSettings.garbageCollectionFee}" placeholder="150" required></div>
                </form>
                <div class="mt-6 flex justify-end"><button id="saveGlobalSettingsBtn" class="bg-gradient-to-r from-brass-600 to-brass-700 text-white px-6 py-3 rounded-xl flex items-center font-medium hover:shadow-premium-lg hover:-translate-y-0.5 transition-all duration-300">${icons.CheckCircle}<span class="ml-2">Save Settings</span></button></div>
                </div>
                ` : ''}
                <div class="glass-panel rounded-2xl p-6"><h4 class="text-xl font-bold mb-6">Preferences</h4><div class="space-y-4"><div class="flex items-center justify-between p-4 bg-white/50 dark:bg-ink-900/50 rounded-lg"><span>Dark Mode</span><button id="toggleDarkModeBtn" class="relative inline-flex h-6 w-11 items-center rounded-full bg-ink-200 dark:bg-ink-700 transition-colors"><span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}"></span></button></div></div></div>
                <div class="glass-panel rounded-2xl p-6"><h4 class="text-xl font-bold mb-6">About</h4><div class="text-center"><div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-brass-600 to-brass-700 flex items-center justify-center text-white font-bold text-xl">PA</div><h5 class="font-bold">Prince Alex Property</h5><p class="text-sm text-ink-600">Version 2.0</p></div></div>
            </div>
        </section>`;
    document.getElementById('exportDataBtn').addEventListener('click', exportData);
    document.getElementById('importDataBtn').addEventListener('click', () => document.getElementById('importFileInput').click());
    document.getElementById('importFileInput').addEventListener('change', (e) => { if (e.target.files[0]) importData(e.target.files[0]); });
    document.getElementById('toggleDarkModeBtn').addEventListener('click', toggleDarkMode);
    
    const saveSettingsBtn = document.getElementById('saveGlobalSettingsBtn');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', async () => {
            const newWaterPrice = parseFloat(document.getElementById('globalWaterPrice').value);
            const newGarbageFee = parseFloat(document.getElementById('globalGarbageFee').value);
            
            if (isNaN(newWaterPrice) || newWaterPrice < 0 || isNaN(newGarbageFee) || newGarbageFee < 0) {
                showNotification('Please enter valid positive numbers.', 'error');
                return;
            }
            
            await saveGlobalSettings(newWaterPrice, newGarbageFee);
            showNotification('Global settings saved successfully!', 'success');
        });
    }
}

async function loadGlobalSettings() {
    try {
        const snapshot = await getCollectionRef('globalSettings').doc('billingRates').get();
        if (snapshot.exists) {
            globalSettings = { ...globalSettings, ...snapshot.data() };
        }
    } catch (error) {
        console.error("Error loading global settings:", error);
    }
}

async function saveGlobalSettings(waterPrice, garbageFee) {
    try {
        await getCollectionRef('globalSettings').doc('billingRates').set({
            waterPricePerUnit: waterPrice,
            garbageCollectionFee: garbageFee,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        globalSettings = { waterPricePerUnit: waterPrice, garbageCollectionFee: garbageFee };
        logActivity('update_settings', `Updated global billing rates: Water=Ksh ${waterPrice}, Garbage=Ksh ${garbageFee}`, 'settings', 'billingRates', null);
    } catch (error) {
        console.error("Error saving global settings:", error);
        showNotification('Failed to save settings. Please try again.', 'error');
    }
}

// ============================================================
// USER MANAGEMENT SECTION (Owner only)
// ============================================================
function renderUserManagementSection(parentEl) {
    parentEl.innerHTML = `
        <section class="glass-panel rounded-2xl shadow-premium p-8">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div><h3 class="text-3xl font-bold gradient-text">User Management</h3><p class="text-ink-600 dark:text-ink-400 mt-2">Manage property admins</p></div>
                <button id="inviteAdminBtn" class="bg-gradient-to-r from-brass-600 to-brass-700 text-white px-6 py-3 rounded-xl flex items-center font-medium shadow-premium hover:shadow-premium-lg hover:-translate-y-0.5 transition-all duration-300 mt-4 md:mt-0">${icons.PlusCircle}<span class="ml-2">Invite Admin</span></button>
            </div>
            <div id="adminsListContainer"></div>
        </section>`;
    document.getElementById('inviteAdminBtn').addEventListener('click', showInviteAdminModal);
    renderAdminsList();
}

async function renderAdminsList() {
    const container = document.getElementById('adminsListContainer');
    if (!container) return;
    const snap = await db.collection('users').where('role', '==', 'admin').get();
    const admins = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    if (!admins.length) { container.innerHTML = `<p class="text-ink-600 text-center py-8">No admins yet.</p>`; return; }
    container.innerHTML = `<div class="space-y-4">${admins.map(a => { const an = (a.assignedProperties || []).map(pid => properties.find(p => p.id === pid)?.name).filter(Boolean).join(', '); return `<div class="glass-panel rounded-xl p-4 flex justify-between items-center"><div><p class="font-semibold">${a.name || a.email}</p><p class="text-sm text-ink-500 dark:text-ink-400">${a.email}</p><p class="text-sm text-ink-600 dark:text-ink-400 mt-1">Assigned: ${an || 'None'}</p></div><div class="flex items-center space-x-2"><button data-admin-id="${a.id}" class="edit-admin-btn p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors" title="Edit">${icons.Edit}</button><button data-admin-id="${a.id}" data-admin-email="${a.email}" class="delete-admin-btn p-2 rounded-lg bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-800 transition-colors" title="Delete">${icons.Trash2}</button></div></div>`; }).join('')}</div>`;
    container.querySelectorAll('.edit-admin-btn').forEach(b => b.addEventListener('click', (e) => { const id = e.currentTarget.dataset.adminId; const a = admins.find(x => x.id === id); if (a) showInviteAdminModal(a); }));
    container.querySelectorAll('.delete-admin-btn').forEach(b => b.addEventListener('click', (e) => {
        const adminId = e.currentTarget.dataset.adminId;
        const adminEmail = e.currentTarget.dataset.adminEmail;
        handleDeleteAdmin(adminId, adminEmail);
    }));
}

function showInviteAdminModal(adminToEdit = null) {
    const isEditing = !!adminToEdit;
    const fc = `<form id="inviteAdminForm" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label class="block text-sm font-semibold mb-2" for="adminName">Full Name</label><input type="text" id="adminName" class="w-full p-3 rounded-lg border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" value="${adminToEdit?.name || ''}" required placeholder="e.g. Jane Doe"></div>
            <div><label class="block text-sm font-semibold mb-2" for="adminEmail">Admin Email</label><input type="email" id="adminEmail" class="w-full p-3 rounded-lg border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" value="${adminToEdit?.email || ''}" required placeholder="admin@example.com"></div>
        </div>
        <div><label class="block text-sm font-semibold mb-2" for="adminRole">Role</label><input type="text" id="adminRole" class="w-full p-3 rounded-lg border-2 border-ink-200 dark:border-ink-600 bg-ink-100 dark:bg-ink-700 cursor-not-allowed" value="Admin" readonly></div>
        <div id="passwordFields" class="space-y-3 ${isEditing ? 'hidden' : ''}"><div class="border-t border-ink-200 dark:border-ink-700 pt-4"><label class="block text-sm font-semibold mb-2" for="newPassword">Password</label><input type="password" id="newPassword" class="w-full p-3 rounded-lg border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80" placeholder="Min. 6 characters" minlength="6" ${!isEditing ? 'required' : ''}><p class="text-xs text-ink-500 mt-1">Must be at least 6 characters</p></div></div>${isEditing ? `<div class="border-t border-ink-200 dark:border-ink-700 pt-4"><div class="flex items-center justify-between mb-3"><label class="block text-sm font-semibold text-ink-700 dark:text-ink-300">Set New Password</label><input type="checkbox" id="changePasswordCheckbox" class="form-checkbox h-4 w-4 text-brass-600 rounded"></div></div>` : ''}<div><label class="block text-sm font-semibold mb-2">Assign Properties</label><div class="space-y-2 max-h-60 overflow-y-auto custom-scrollbar p-3 border-2 border-ink-200 dark:border-ink-600 rounded-lg">${properties.map(p => `<label class="flex items-center gap-2"><input type="checkbox" name="assignedProperties" value="${p.id}" class="form-checkbox h-4 w-4 text-brass-600 rounded" ${adminToEdit?.assignedProperties?.includes(p.id) ? 'checked' : ''}><span>${p.name}</span></label>`).join('')}</div></div></form>`;
    const modalResult = showModal(isEditing ? 'Edit Admin' : 'Invite Admin', fc, 'confirm', async (closeModal) => {
        const f = document.getElementById('inviteAdminForm');
        const email = f.elements['adminEmail'].value;
        const name = f.elements['adminName'].value;
        const ap = Array.from(f.querySelectorAll('input[name="assignedProperties"]:checked')).map(cb => cb.value);
        const ownerName = user?.displayName || user?.email || 'Property Owner';
        const assignedPropNames = ap.map(id => properties.find(p => p.id === id)?.name).filter(Boolean).join(', ');
        
        try {
            if (isEditing) {
                // Update existing user permissions
                await db.collection('users').doc(adminToEdit.id).set({ 
                    email, 
                    name,
                    role: 'admin', 
                    assignedProperties: ap 
                }, { merge: true });
                logActivity('update_admin', `Updated permissions for admin: ${email}`, 'user', adminToEdit.id, null);
                showNotification('Admin permissions updated!', 'success');

                // Check if password change is requested and send reset email
                const changePassword = document.getElementById('changePasswordCheckbox');
                if (changePassword && changePassword.checked) {
                    // Send password reset email. This is more secure and avoids "requires-recent-login" errors.
                    try {
                        await auth.sendPasswordResetEmail(email);
                        showNotification(`A password reset link has been sent to ${email}.`, 'info');
                    } catch (error) {
                        console.error("Password reset error:", error);
                        showNotification(`Failed to send password reset: ${error.message}`, 'error');
                    }
                }

            } else {
                // Create Firebase Auth user with a temporary password
                const password = f.elements['newPassword'].value;

                if (password.length < 6) {
                    showNotification('Password must be at least 6 characters.', 'error');
                    return;
                }
                
                // Create the user in Firebase Auth
                const userCredential = await auth.createUserWithEmailAndPassword(email, password);
                
                // Save additional user data to Firestore
                await db.collection('users').doc(userCredential.user.uid).set({
                    name: name,
                    email: email,
                    role: 'admin',
                    assignedProperties: ap,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    invitedBy: user.uid
                });
                
                // Send invitation email with password setup instructions
                try {
                    await sendAdminInvitationEmail(email, name, ownerName, assignedPropNames);
                    logActivity('invite_admin', `Invited new admin: ${email}`, 'user', userCredential.user.uid, null);
                    showNotification(`Admin account created for ${email}. An invitation email has been sent.`, 'success');
                } catch (err) {
                    console.error("Email send error:", err);
                    showNotification(`Admin account created but email delivery failed. Please share login details manually.`, 'info');
                }
            }
            
        } catch (error) {
            console.error("Error creating admin account:", error);
            if (error.code === 'auth/email-already-in-use') {
                // This case is complex on the client-side due to security restrictions on looking up users by email.
                // The best practice is to handle this with a Cloud Function. For now, we'll show a clear error.
                showNotification('An account with this email already exists. Please edit the existing user or use a different email.', 'error');
            } else {
                showNotification(`Failed to create admin: ${error.message}`, 'error');
            }
        }
        
        renderAdminsList();
        closeModal();
    });
    
    // Add password toggle functionality for edit mode
    if (isEditing && modalResult) {
        const changePasswordCheckbox = modalResult.modalElement.querySelector('#changePasswordCheckbox');
        const passwordFields = modalResult.modalElement.querySelector('#passwordFields');
        const newPasswordInput = modalResult.modalElement.querySelector('#newPassword');
        
        changePasswordCheckbox?.addEventListener('change', (e) => {
            if (e.target.checked) {
                passwordFields?.classList.remove('hidden');
                newPasswordInput?.setAttribute('required', 'true');
            } else {
                passwordFields?.classList.add('hidden');
                newPasswordInput?.removeAttribute('required');
            }
        });
    }
}

function handleDeleteAdmin(adminId, adminEmail) {
    if (!adminId || !adminEmail) return;
    showModal("Confirm Deletion", `Are you sure you want to delete the admin user: <strong>${adminEmail}</strong>? This will remove their access.`, 'confirm', async () => {
        try {
            await deleteData('users', adminId);
            logActivity('delete_admin', `Deleted admin user: ${adminEmail}`, 'user', adminId, null);
            showNotification('Admin user deleted successfully.', 'success');
            renderAdminsList();
        } catch (error) { showNotification(`Failed to delete admin: ${error.message}`, 'error'); }
    });
}

// ============================================================
// ACTIVITY LOG SECTION
// ============================================================
function renderActivityLogSection(parentEl) {
    const propertyFilterDropdown = userProfile?.role === 'owner' ? `
        <select id="activityLogPropertyFilter" class="w-full md:w-auto p-3 rounded-xl border-2 border-ink-200 dark:border-ink-600 bg-white/80 dark:bg-ink-800/80 focus:border-brass-500 focus:ring-brass-500/20 focus:ring-4 outline-none transition">
            <option value="">All Properties</option>
            ${properties.map(p => `<option value="${p.id}" ${activityLogPropertyFilter === p.id ? 'selected' : ''}>${p.name}</option>`).join('')}
        </select>
    ` : '';

    parentEl.innerHTML = `
        <section class="glass-panel rounded-2xl shadow-premium p-8">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div><h3 class="text-3xl font-bold gradient-text">Activity Logs</h3><p class="text-ink-600 dark:text-ink-400 mt-2">View all user actions and system events</p></div>
            </div>
            <div class="flex flex-col md:flex-row gap-4 mb-6">
                <div class="relative flex-grow">
                    <input type="text" id="activityLogSearchInput" placeholder="Search logs by user, action, or details..." class="w-full pl-12 pr-4 py-3 border-0 rounded-xl glass-panel focus:ring-2 focus:ring-brass-500 focus:outline-none text-ink-800 dark:text-ink-200 placeholder-ink-500 dark:placeholder-ink-400" value="${activityLogSearchQuery}">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">${icons.Search}</div>
                </div>
                ${propertyFilterDropdown}
            </div>
            <div id="activityLogListContainer" class="space-y-3 custom-scrollbar overflow-y-auto max-h-[60vh]"></div>
        </section>
    `;
    document.getElementById('activityLogSearchInput').addEventListener('input', (e) => {
        activityLogSearchQuery = e.target.value;
        renderActivityLogList();
    });
    if (userProfile?.role === 'owner') {
        document.getElementById('activityLogPropertyFilter').addEventListener('change', (e) => {
            activityLogPropertyFilter = e.target.value;
            renderActivityLogList();
        });
    }
    renderActivityLogList();
}

function renderActivityLogList() {
    const container = document.getElementById('activityLogListContainer');
    if (!container) return;

    let filteredLogs = activityLogs;

    if (activityLogPropertyFilter) {
        filteredLogs = filteredLogs.filter(log => log.entityType === 'property' && log.entityId === activityLogPropertyFilter);
    }

    const query = activityLogSearchQuery.toLowerCase();
    if (query) {
        filteredLogs = filteredLogs.filter(log => (log.userName || '').toLowerCase().includes(query) || (log.action || '').toLowerCase().includes(query) || (log.details || '').toLowerCase().includes(query));
    }

    if (!filteredLogs.length) {
        container.innerHTML = '<p class="text-center text-ink-500 py-8">No matching activity logs found.</p>';
        return;
    }

    container.innerHTML = filteredLogs.map(log => {
        const logTime = log.createdAt?.toDate ? log.createdAt.toDate() : new Date();
        return `
            <div class="flex items-start space-x-4 p-4 rounded-lg bg-white/50 dark:bg-black/20">
                <div class="w-2.5 h-2.5 rounded-full ${getActivityIconColor(log.action)} mt-1.5 shrink-0"></div>
                <div class="flex-grow">
                    <p class="text-sm text-ink-800 dark:text-ink-200 font-medium">${log.details}</p>
                    <p class="text-xs text-ink-500 dark:text-ink-400 mt-1">
                        <span class="font-semibold">${log.userName}</span> &bull; ${timeAgo(logTime)}
                    </p>
                </div>
                <span class="text-xs font-mono bg-ink-100 dark:bg-ink-700 text-ink-600 dark:text-ink-300 px-2 py-1 rounded">${log.action}</span>
            </div>
        `;
    }).join('');
}

// ============================================================
// PDF GENERATION
// ============================================================
async function generateReceiptPdf(bill) {
    const billDate = bill.createdAt?.toDate ? bill.createdAt.toDate() : new Date(bill.createdAt);
    if (isNaN(billDate)) { showNotification("Invalid date.", "error"); return; }
    const tenant = tenants.find(t => t.id === bill.tenantId), property = properties.find(p => p.id === bill.propertyId);
    if (!tenant || !property) { showNotification("Missing info.", "error"); return; }
    const rd = billDate.toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' });
    const bp = new Date(bill.billingPeriod).toLocaleDateString('en-KE', { year: 'numeric', month: 'long' });
    const ob = tenant.outstandingBalance.toFixed(2);
    const html = `<div style="font-family: 'Inter', sans-serif; width: 700px; margin: 0 auto; background: #ffffff; padding: 0; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
        <!-- Header with gradient -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 40px; color: white;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h1 style="font-size: 32px; font-weight: 800; margin: 0; letter-spacing: -0.5px;">PA PROPERTY</h1>
                    <p style="font-size: 13px; margin: 5px 0 0 0; opacity: 0.9;">Property Management Solutions</p>
                    <p style="font-size: 12px; margin: 3px 0 0 0; opacity: 0.8;">Nairobi, Kenya</p>
                </div>
                <div style="text-align: right;">
                    <h2 style="font-size: 28px; font-weight: 700; margin: 0;">INVOICE</h2>
                    <p style="font-size: 13px; margin: 5px 0 0 0; opacity: 0.9;">${bill.billReference || 'N/A'}</p>
                </div>
            </div>
        </div>

        <!-- Invoice Info Bar -->
        <div style="background: #f9fafb; padding: 20px 40px; border-bottom: 1px solid #e5e7eb;">
            <div style="display: flex; justify-content: space-between;">
                <div>
                    <p style="font-size: 11px; color: #6b7280; text-transform: uppercase; font-weight: 600; margin: 0 0 5px 0;">Invoice Date</p>
                    <p style="font-size: 14px; font-weight: 600; color: #111827; margin: 0;">${rd}</p>
                </div>
                <div>
                    <p style="font-size: 11px; color: #6b7280; text-transform: uppercase; font-weight: 600; margin: 0 0 5px 0;">Billing Period</p>
                    <p style="font-size: 14px; font-weight: 600; color: #111827; margin: 0;">${bp}</p>
                </div>
                <div>
                    <p style="font-size: 11px; color: #6b7280; text-transform: uppercase; font-weight: 600; margin: 0 0 5px 0;">Due Date</p>
                    <p style="font-size: 14px; font-weight: 600; color: #111827; margin: 0;">${new Date(billDate.getTime() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </div>
        </div>

        <!-- Bill To Section -->
        <div style="padding: 30px 40px;">
            <div style="display: flex; justify-content: space-between; gap: 40px;">
                <div style="flex: 1;">
                    <p style="font-size: 11px; color: #6b7280; text-transform: uppercase; font-weight: 600; margin: 0 0 10px 0;">Bill To</p>
                    <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea;">
                        <p style="font-size: 16px; font-weight: 700; color: #111827; margin: 0 0 5px 0;">${tenant.name}</p>
                        <p style="font-size: 13px; color: #4b5563; margin: 0 0 3px 0;">${property.name}</p>
                        <p style="font-size: 13px; color: #4b5563; margin: 0 0 3px 0;">House ${tenant.houseNumber}</p>
                        <p style="font-size: 13px; color: #4b5563; margin: 0;">${tenant.phoneNumber}</p>
                    </div>
                </div>
                <div style="flex: 1;">
                    <p style="font-size: 11px; color: #6b7280; text-transform: uppercase; font-weight: 600; margin: 0 0 10px 0;">Property Details</p>
                    <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #764ba2;">
                        <p style="font-size: 13px; color: #4b5563; margin: 0 0 5px 0;"><strong>Property:</strong> ${property.name}</p>
                        <p style="font-size: 13px; color: #4b5563; margin: 0 0 5px 0;"><strong>Location:</strong> ${property.location}</p>
                        <p style="font-size: 13px; color: #4b5563; margin: 0 0 5px 0;"><strong>Type:</strong> ${tenant.houseType}</p>
                        <p style="font-size: 13px; color: #4b5563; margin: 0;"><strong>Lease:</strong> Active</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Items Table -->
        <div style="padding: 0 40px 30px 40px;">
            <table style="width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                <thead>
                    <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                        <th style="padding: 14px 16px; text-align: left; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Description</th>
                        <th style="padding: 14px 16px; text-align: center; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Details</th>
                        <th style="padding: 14px 16px; text-align: right; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                        <td style="padding: 16px; font-size: 14px; font-weight: 600; color: #111827;">Monthly Rent</td>
                        <td style="padding: 16px; font-size: 13px; color: #6b7280; text-align: center;">${tenant.houseType} - ${tenant.houseNumber}</td>
                        <td style="padding: 16px; text-align: right; font-size: 14px; font-weight: 700; color: #111827;">${formatCurrency(bill.rentAmount || tenant.amountCharged)}</td>
                    </tr>
                    ${bill.waterAmount ? `<tr style="border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
                        <td style="padding: 16px; font-size: 14px; font-weight: 600; color: #111827;">💧 Water Usage</td>
                        <td style="padding: 16px; font-size: 13px; color: #6b7280; text-align: center;">${bill.waterUnitsUsed || 0} units × Ksh ${property.waterPricePerUnit || 200}/unit</td>
                        <td style="padding: 16px; text-align: right; font-size: 14px; font-weight: 700; color: #111827;">${formatCurrency(bill.waterAmount)}</td>
                    </tr>` : ''}
                    ${bill.garbageAmount ? `<tr style="border-bottom: 1px solid #e5e7eb;">
                        <td style="padding: 16px; font-size: 14px; font-weight: 600; color: #111827;">🗑️ Garbage Collection</td>
                        <td style="padding: 16px; font-size: 13px; color: #6b7280; text-align: center;">Monthly service fee</td>
                        <td style="padding: 16px; text-align: right; font-size: 14px; font-weight: 700; color: #111827;">${formatCurrency(bill.garbageAmount)}</td>
                    </tr>` : ''}
                </tbody>
            </table>
        </div>

        <!-- Summary Section -->
        <div style="padding: 0 40px 30px 40px;">
            <div style="display: flex; justify-content: flex-end;">
                <div style="width: 350px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tbody>
                            <tr style="border-bottom: 1px solid #e5e7eb;">
                                <td style="padding: 10px 0; font-size: 14px; color: #6b7280; font-weight: 500;">Subtotal</td>
                                <td style="padding: 10px 0; font-size: 14px; color: #111827; text-align: right; font-weight: 600;">${formatCurrency(bill.amount)}</td>
                            </tr>
                            <tr style="border-bottom: 2px solid #e5e7eb;">
                                <td style="padding: 12px 0; font-size: 14px; color: #6b7280; font-weight: 500;">Previous Balance</td>
                                <td style="padding: 12px 0; font-size: 14px; color: #111827; text-align: right; font-weight: 600;">${formatCurrency(tenant.outstandingBalance - bill.amount)}</td>
                            </tr>
                            <tr style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; border-radius: 6px;">
                                <td style="padding: 14px 12px; font-size: 16px; font-weight: 700; color: white;">Total Due</td>
                                <td style="padding: 14px 12px; font-size: 18px; font-weight: 800; color: white; text-align: right;">${formatCurrency(ob)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Payment Status -->
        <div style="padding: 20px 40px; background: ${ob > 0 ? '#fef3c7' : '#d1fae5'}; border-top: 1px solid #e5e7eb;">
            <div style="display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 40px; height: 40px; border-radius: 50%; background: ${ob > 0 ? '#f59e0b' : '#10b981'}; display: flex; align-items: center; justify-content: center; color: white; font-size: 20px;">
                        ${ob > 0 ? '⚠️' : '✅'}
                    </div>
                    <div>
                        <p style="font-size: 14px; font-weight: 700; color: #111827; margin: 0;">${ob > 0 ? 'Payment Pending' : 'Payment Complete'}</p>
                        <p style="font-size: 12px; color: #6b7280; margin: 3px 0 0 0;">${ob > 0 ? 'Please process payment at your earliest convenience' : 'Thank you for your payment'}</p>
                    </div>
                </div>
                <div style="text-align: right;">
                    <p style="font-size: 12px; color: #6b7280; margin: 0 0 3px 0;">Outstanding Balance</p>
                    <p style="font-size: 20px; font-weight: 800; color: ${ob > 0 ? '#dc2626' : '#059669'}; margin: 0;">${formatCurrency(ob)}</p>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div style="padding: 25px 40px; background: #f9fafb; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="font-size: 14px; color: #4b5563; margin: 0 0 8px 0; font-weight: 500;">Thank you for your business!</p>
            <p style="font-size: 11px; color: #9ca3af; margin: 0 0 3px 0;">For inquiries, contact us at support@paproperty.co.ke | +254 700 000 000</p>
            <p style="font-size: 10px; color: #9ca3af; margin: 5px 0 0 0;">Generated on ${new Date().toLocaleString('en-KE')}</p>
        </div>
    </div>`;
    const temp = document.createElement('div');
    temp.style.cssText = 'position:absolute;left:-9999px;width:700px';
    temp.innerHTML = html;
    document.body.appendChild(temp);
    try {
        const canvas = await html2canvas(temp, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
        const iw = 210, ih = canvas.height * iw / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, iw, ih);
        pdf.save(`rent-receipt-${tenant.name.replace(/\s/g, '-')}.pdf`);
        showNotification(`PDF for ${tenant.name} downloaded.`, 'success');
    } catch (err) { console.error(err); showNotification('PDF generation failed.', 'error'); }
    finally { document.body.removeChild(temp); }
}

// ============================================================
// DOM READY
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    initializeDarkMode();
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
});

function timeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
}

function getActivityIconColor(action) {
    if (action.includes('create') || action.includes('add') || action.includes('record') || action.includes('generate')) return 'bg-green-500';
    if (action.includes('update') || action.includes('renew')) return 'bg-blue-500';
    if (action.includes('delete') || action.includes('terminate')) return 'bg-red-500';
    if (action.includes('login') || action.includes('logout')) return 'bg-purple-500';
    if (action.includes('export') || action.includes('import')) return 'bg-yellow-500';
    return 'bg-brass-400';
}
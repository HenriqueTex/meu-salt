// JavaScript para o Dashboard do Salt ERP

document.addEventListener('DOMContentLoaded', function() {
    // Toggle da sidebar em dispositivos móveis
    const sidebarToggleButtons = document.querySelectorAll('.sidebar-toggle, .sidebar-toggle-btn');
    const body = document.body;
    
    sidebarToggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            body.classList.toggle('sidebar-open');
        });
    });
    
    // Criar backdrop para fechar sidebar em dispositivos móveis
    const backdrop = document.createElement('div');
    backdrop.className = 'sidebar-backdrop';
    body.appendChild(backdrop);
    
    backdrop.addEventListener('click', function() {
        body.classList.remove('sidebar-open');
    });
    
    // Inicializar gráficos
    initCharts();
    
    // Inicializar funcionalidades interativas
    initInteractiveElements();
});

// Função para inicializar os gráficos
function initCharts() {
    // Gráfico de Faturamento Mensal
    const revenueChartEl = document.getElementById('revenueChart');
    if (revenueChartEl) {
        const revenueChart = new Chart(revenueChartEl, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets: [{
                    label: 'Faturamento (R$)',
                    data: [125000, 148000, 156000, 170000, 162000, 180000, 190000, 210000, 230000, 245000, 256000, 270000],
                    backgroundColor: 'rgba(0, 86, 179, 0.7)',
                    borderColor: 'rgba(0, 86, 179, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return 'R$ ' + value.toLocaleString('pt-BR');
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return 'R$ ' + context.raw.toLocaleString('pt-BR');
                            }
                        }
                    },
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    
    // Gráfico de Vendas por Categoria
    const salesChartEl = document.getElementById('salesChart');
    if (salesChartEl) {
        const salesChart = new Chart(salesChartEl, {
            type: 'doughnut',
            data: {
                labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D', 'Produto E'],
                datasets: [{
                    data: [35, 25, 20, 10, 10],
                    backgroundColor: [
                        'rgba(0, 86, 179, 0.7)',
                        'rgba(40, 167, 69, 0.7)',
                        'rgba(255, 193, 7, 0.7)',
                        'rgba(220, 53, 69, 0.7)',
                        'rgba(23, 162, 184, 0.7)'
                    ],
                    borderColor: [
                        'rgba(0, 86, 179, 1)',
                        'rgba(40, 167, 69, 1)',
                        'rgba(255, 193, 7, 1)',
                        'rgba(220, 53, 69, 1)',
                        'rgba(23, 162, 184, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.raw + '%';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Gráfico de Eficiência de Produção
    const efficiencyChartEl = document.getElementById('efficiencyChart');
    if (efficiencyChartEl) {
        const efficiencyChart = new Chart(efficiencyChartEl, {
            type: 'line',
            data: {
                labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 'Semana 7', 'Semana 8'],
                datasets: [{
                    label: 'Eficiência Real',
                    data: [75, 78, 76, 79, 85, 88, 90, 92],
                    borderColor: 'rgba(0, 86, 179, 1)',
                    backgroundColor: 'rgba(0, 86, 179, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Meta',
                    data: [80, 80, 80, 85, 85, 85, 90, 90],
                    borderColor: 'rgba(220, 53, 69, 1)',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 70,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.raw + '%';
                            }
                        }
                    }
                }
            }
        });
    }
}

// Função para inicializar elementos interativos
function initInteractiveElements() {
    // Checkboxes das tarefas
    const taskCheckboxes = document.querySelectorAll('.task-item .form-check-input');
    
    taskCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const taskItem = this.closest('.task-item');
            if (this.checked) {
                taskItem.style.opacity = '0.6';
                taskItem.querySelector('.form-check-label').style.textDecoration = 'line-through';
            } else {
                taskItem.style.opacity = '1';
                taskItem.querySelector('.form-check-label').style.textDecoration = 'none';
            }
        });
    });
    
    // Botões de ação nas tabelas
    const actionButtons = document.querySelectorAll('.table .btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Ação não implementada nesta demonstração');
        });
    });
    
    // Botões de exportação
    const exportButtons = document.querySelectorAll('.dropdown-item, .btn-primary');
    
    exportButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.textContent.includes('Exportar')) {
                e.preventDefault();
                alert('Funcionalidade de exportação não implementada nesta demonstração');
            }
        });
    });
    
    // Botões de adicionar (Nova Ordem, Nova Tarefa)
    const addButtons = document.querySelectorAll('.dashboard-card-actions .btn-primary');
    
    addButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Funcionalidade de adição não implementada nesta demonstração');
        });
    });
}

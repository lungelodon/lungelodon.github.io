-- Telecom Customer Churn Analysis SQL Script
-- Data analysis to identify key churn indicators

-- Basic dataset overview
SELECT 
    COUNT(*) as total_customers,
    SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) as churned_customers,
    ROUND(100.0 * SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) as churn_rate
FROM telecom_customers;

-- Churn by contract type
SELECT 
    Contract,
    COUNT(*) as total_customers,
    SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) as churned_customers,
    ROUND(100.0 * SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) as churn_rate
FROM telecom_customers
GROUP BY Contract
ORDER BY churn_rate DESC;

-- Churn by payment method
SELECT 
    PaymentMethod,
    COUNT(*) as total_customers,
    SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) as churned_customers,
    ROUND(100.0 * SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) as churn_rate
FROM telecom_customers
GROUP BY PaymentMethod
ORDER BY churn_rate DESC;

-- Churn by internet service type
SELECT 
    InternetService,
    COUNT(*) as total_customers,
    SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) as churned_customers,
    ROUND(100.0 * SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) as churn_rate
FROM telecom_customers
GROUP BY InternetService
ORDER BY churn_rate DESC;

-- Average tenure analysis
SELECT 
    CASE WHEN Churn = 'Yes' THEN 'Churned' ELSE 'Retained' END as customer_status,
    AVG(tenure) as avg_tenure,
    AVG(MonthlyCharges) as avg_monthly_charges,
    AVG(CAST(TotalCharges as DECIMAL(10,2))) as avg_total_charges
FROM telecom_customers
WHERE TotalCharges != ' '
GROUP BY Churn;

-- Senior citizen churn analysis
SELECT 
    CASE WHEN SeniorCitizen = 1 THEN 'Senior' ELSE 'Non-Senior' END as customer_type,
    COUNT(*) as total_customers,
    SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) as churned_customers,
    ROUND(100.0 * SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) as churn_rate
FROM telecom_customers
GROUP BY SeniorCitizen;
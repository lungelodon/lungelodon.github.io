-- HR Employee Attrition Analysis SQL Script
-- Comprehensive analysis of employee attrition patterns

-- Overall attrition statistics
SELECT 
    COUNT(*) as total_employees,
    SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) as attrited_employees,
    ROUND(100.0 * SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) as attrition_rate,
    ROUND(AVG(Age), 1) as avg_age,
    ROUND(AVG(MonthlyIncome), 2) as avg_monthly_income
FROM hr_employees;

-- Attrition by age groups
SELECT 
    CASE 
        WHEN Age < 25 THEN '18-24'
        WHEN Age < 35 THEN '25-34'
        WHEN Age < 45 THEN '35-44'
        WHEN Age < 55 THEN '45-54'
        ELSE '55+'
    END as age_group,
    COUNT(*) as total_employees,
    SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) as attrited_employees,
    ROUND(100.0 * SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) as attrition_rate
FROM hr_employees
GROUP BY 
    CASE 
        WHEN Age < 25 THEN '18-24'
        WHEN Age < 35 THEN '25-34'
        WHEN Age < 45 THEN '35-44'
        WHEN Age < 55 THEN '45-54'
        ELSE '55+'
    END
ORDER BY attrition_rate DESC;

-- Attrition by department
SELECT 
    Department,
    COUNT(*) as total_employees,
    SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) as attrited_employees,
    ROUND(100.0 * SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) as attrition_rate,
    ROUND(AVG(MonthlyIncome), 2) as avg_monthly_income
FROM hr_employees
GROUP BY Department
ORDER BY attrition_rate DESC;

-- Attrition by job role
SELECT 
    JobRole,
    COUNT(*) as total_employees,
    SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) as attrited_employees,
    ROUND(100.0 * SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) as attrition_rate
FROM hr_employees
GROUP BY JobRole
ORDER BY attrition_rate DESC;

-- Overtime impact on attrition
SELECT 
    OverTime,
    COUNT(*) as total_employees,
    SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) as attrited_employees,
    ROUND(100.0 * SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) as attrition_rate
FROM hr_employees
GROUP BY OverTime
ORDER BY attrition_rate DESC;

-- Job satisfaction impact
SELECT 
    JobSatisfaction,
    COUNT(*) as total_employees,
    SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) as attrited_employees,
    ROUND(100.0 * SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) as attrition_rate
FROM hr_employees
GROUP BY JobSatisfaction
ORDER BY JobSatisfaction;

-- Work-life balance impact
SELECT 
    WorkLifeBalance,
    COUNT(*) as total_employees,
    SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) as attrited_employees,
    ROUND(100.0 * SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) as attrition_rate
FROM hr_employees
GROUP BY WorkLifeBalance
ORDER BY WorkLifeBalance;

-- Years at company vs attrition
SELECT 
    CASE 
        WHEN YearsAtCompany < 2 THEN '0-1 years'
        WHEN YearsAtCompany < 5 THEN '2-4 years'
        WHEN YearsAtCompany < 10 THEN '5-9 years'
        ELSE '10+ years'
    END as tenure_group,
    COUNT(*) as total_employees,
    SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) as attrited_employees,
    ROUND(100.0 * SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) as attrition_rate
FROM hr_employees
GROUP BY 
    CASE 
        WHEN YearsAtCompany < 2 THEN '0-1 years'
        WHEN YearsAtCompany < 5 THEN '2-4 years'
        WHEN YearsAtCompany < 10 THEN '5-9 years'
        ELSE '10+ years'
    END
ORDER BY attrition_rate DESC;

-- Monthly income impact
SELECT 
    CASE 
        WHEN MonthlyIncome < 3000 THEN 'Low (< $3,000)'
        WHEN MonthlyIncome < 6000 THEN 'Medium ($3,000 - $6,000)'
        WHEN MonthlyIncome < 10000 THEN 'High ($6,000 - $10,000)'
        ELSE 'Very High ($10,000+)'
    END as income_group,
    COUNT(*) as total_employees,
    SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) as attrited_employees,
    ROUND(100.0 * SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) as attrition_rate
FROM hr_employees
GROUP BY 
    CASE 
        WHEN MonthlyIncome < 3000 THEN 'Low (< $3,000)'
        WHEN MonthlyIncome < 6000 THEN 'Medium ($3,000 - $6,000)'
        WHEN MonthlyIncome < 10000 THEN 'High ($6,000 - $10,000)'
        ELSE 'Very High ($10,000+)'
    END
ORDER BY attrition_rate DESC;
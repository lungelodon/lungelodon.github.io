-- Global Sales Performance Analysis SQL Script
-- Comprehensive analysis of superstore sales data

-- Overall sales performance
SELECT 
    COUNT(DISTINCT Order_ID) as total_orders,
    COUNT(*) as total_items_sold,
    ROUND(SUM(Sales), 2) as total_revenue,
    ROUND(SUM(Profit), 2) as total_profit,
    ROUND(100.0 * SUM(Profit) / SUM(Sales), 2) as profit_margin_percent
FROM global_sales;

-- Regional performance analysis
SELECT 
    Region,
    COUNT(DISTINCT Order_ID) as orders,
    ROUND(SUM(Sales), 2) as revenue,
    ROUND(SUM(Profit), 2) as profit,
    ROUND(100.0 * SUM(Profit) / SUM(Sales), 2) as profit_margin,
    ROUND(100.0 * SUM(Sales) / (SELECT SUM(Sales) FROM global_sales), 2) as revenue_share
FROM global_sales
GROUP BY Region
ORDER BY revenue DESC;

-- Category performance
SELECT 
    Category,
    COUNT(*) as items_sold,
    ROUND(SUM(Sales), 2) as revenue,
    ROUND(SUM(Profit), 2) as profit,
    ROUND(AVG(Sales), 2) as avg_sale_value,
    ROUND(100.0 * SUM(Profit) / SUM(Sales), 2) as profit_margin
FROM global_sales
GROUP BY Category
ORDER BY revenue DESC;

-- Customer segment analysis
SELECT 
    Segment,
    COUNT(DISTINCT Customer_ID) as unique_customers,
    COUNT(DISTINCT Order_ID) as orders,
    ROUND(SUM(Sales), 2) as revenue,
    ROUND(SUM(Profit), 2) as profit,
    ROUND(AVG(Sales), 2) as avg_order_value
FROM global_sales
GROUP BY Segment
ORDER BY revenue DESC;

-- Monthly sales trend (extracting month from date)
SELECT 
    SUBSTR(Order_Date, 1, 2) as month,
    COUNT(DISTINCT Order_ID) as orders,
    ROUND(SUM(Sales), 2) as revenue,
    ROUND(SUM(Profit), 2) as profit
FROM global_sales
GROUP BY SUBSTR(Order_Date, 1, 2)
ORDER BY month;

-- Top 10 most profitable products
SELECT 
    Product_Name,
    Category,
    Sub_Category,
    COUNT(*) as times_sold,
    ROUND(SUM(Sales), 2) as total_revenue,
    ROUND(SUM(Profit), 2) as total_profit,
    ROUND(100.0 * SUM(Profit) / SUM(Sales), 2) as profit_margin
FROM global_sales
GROUP BY Product_Name, Category, Sub_Category
ORDER BY total_profit DESC
LIMIT 10;

-- Shipping mode performance
SELECT 
    Ship_Mode,
    COUNT(DISTINCT Order_ID) as orders,
    ROUND(SUM(Sales), 2) as revenue,
    ROUND(AVG(Sales), 2) as avg_order_value,
    ROUND(100.0 * COUNT(*) / (SELECT COUNT(*) FROM global_sales), 2) as usage_percent
FROM global_sales
GROUP BY Ship_Mode
ORDER BY revenue DESC;

-- Discount impact analysis
SELECT 
    CASE 
        WHEN Discount = 0 THEN 'No Discount'
        WHEN Discount <= 0.2 THEN 'Low Discount (0-20%)'
        WHEN Discount <= 0.5 THEN 'Medium Discount (20-50%)'
        ELSE 'High Discount (50%+)'
    END as discount_category,
    COUNT(*) as items,
    ROUND(AVG(Sales), 2) as avg_sales,
    ROUND(AVG(Profit), 2) as avg_profit,
    ROUND(100.0 * AVG(Profit) / AVG(Sales), 2) as avg_profit_margin
FROM global_sales
GROUP BY 
    CASE 
        WHEN Discount = 0 THEN 'No Discount'
        WHEN Discount <= 0.2 THEN 'Low Discount (0-20%)'
        WHEN Discount <= 0.5 THEN 'Medium Discount (20-50%)'
        ELSE 'High Discount (50%+)'
    END
ORDER BY avg_profit DESC;
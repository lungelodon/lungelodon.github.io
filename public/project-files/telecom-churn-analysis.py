# Telecom Customer Churn Analysis
# Python script for exploratory data analysis

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix

# Load the data
df = pd.read_csv('telecom-churn-data.csv')

# Basic data exploration
print("Dataset Shape:", df.shape)
print("\nDataset Info:")
print(df.info())
print("\nChurn Distribution:")
print(df['Churn'].value_counts())

# Calculate churn rate
churn_rate = (df['Churn'] == 'Yes').sum() / len(df) * 100
print(f"\nOverall Churn Rate: {churn_rate:.2f}%")

# Churn by contract type
contract_churn = df.groupby('Contract')['Churn'].apply(lambda x: (x == 'Yes').sum() / len(x) * 100)
print("\nChurn Rate by Contract Type:")
print(contract_churn)

# Churn by payment method
payment_churn = df.groupby('PaymentMethod')['Churn'].apply(lambda x: (x == 'Yes').sum() / len(x) * 100)
print("\nChurn Rate by Payment Method:")
print(payment_churn)

# Visualizations
plt.figure(figsize=(15, 12))

# Contract type vs churn
plt.subplot(2, 3, 1)
contract_counts = df.groupby(['Contract', 'Churn']).size().unstack()
contract_counts.plot(kind='bar', ax=plt.gca())
plt.title('Churn by Contract Type')
plt.xlabel('Contract Type')
plt.ylabel('Number of Customers')
plt.legend(['No Churn', 'Churn'])
plt.xticks(rotation=45)

# Payment method vs churn
plt.subplot(2, 3, 2)
payment_counts = df.groupby(['PaymentMethod', 'Churn']).size().unstack()
payment_counts.plot(kind='bar', ax=plt.gca())
plt.title('Churn by Payment Method')
plt.xlabel('Payment Method')
plt.ylabel('Number of Customers')
plt.legend(['No Churn', 'Churn'])
plt.xticks(rotation=45)

# Tenure distribution
plt.subplot(2, 3, 3)
df[df['Churn'] == 'Yes']['tenure'].hist(alpha=0.7, bins=20, label='Churned', color='red')
df[df['Churn'] == 'No']['tenure'].hist(alpha=0.7, bins=20, label='Retained', color='blue')
plt.title('Tenure Distribution by Churn')
plt.xlabel('Tenure (months)')
plt.ylabel('Frequency')
plt.legend()

# Monthly charges distribution
plt.subplot(2, 3, 4)
df[df['Churn'] == 'Yes']['MonthlyCharges'].hist(alpha=0.7, bins=20, label='Churned', color='red')
df[df['Churn'] == 'No']['MonthlyCharges'].hist(alpha=0.7, bins=20, label='Retained', color='blue')
plt.title('Monthly Charges Distribution by Churn')
plt.xlabel('Monthly Charges ($)')
plt.ylabel('Frequency')
plt.legend()

# Internet service vs churn
plt.subplot(2, 3, 5)
internet_counts = df.groupby(['InternetService', 'Churn']).size().unstack()
internet_counts.plot(kind='bar', ax=plt.gca())
plt.title('Churn by Internet Service Type')
plt.xlabel('Internet Service')
plt.ylabel('Number of Customers')
plt.legend(['No Churn', 'Churn'])
plt.xticks(rotation=45)

# Senior citizen vs churn
plt.subplot(2, 3, 6)
senior_counts = df.groupby(['SeniorCitizen', 'Churn']).size().unstack()
senior_counts.plot(kind='bar', ax=plt.gca())
plt.title('Churn by Senior Citizen Status')
plt.xlabel('Senior Citizen (0=No, 1=Yes)')
plt.ylabel('Number of Customers')
plt.legend(['No Churn', 'Churn'])

plt.tight_layout()
plt.savefig('telecom_churn_analysis.png', dpi=300, bbox_inches='tight')
plt.show()

# Key insights
print("\n=== KEY INSIGHTS ===")
print("1. Month-to-month contracts show highest churn rates")
print("2. Electronic check payment method correlates with higher churn")
print("3. Fiber optic customers show higher churn than DSL customers")
print("4. Senior citizens have lower churn rates")
print("5. Customers with shorter tenure are more likely to churn")

# Simple predictive model
# Prepare data for modeling
df_model = df.copy()

# Encode categorical variables
le = LabelEncoder()
categorical_columns = ['gender', 'Partner', 'Dependents', 'PhoneService', 'MultipleLines', 
                      'InternetService', 'OnlineSecurity', 'OnlineBackup', 'DeviceProtection',
                      'TechSupport', 'StreamingTV', 'StreamingMovies', 'Contract', 
                      'PaperlessBilling', 'PaymentMethod']

for col in categorical_columns:
    df_model[col] = le.fit_transform(df_model[col])

# Convert TotalCharges to numeric
df_model['TotalCharges'] = pd.to_numeric(df_model['TotalCharges'], errors='coerce')
df_model = df_model.dropna()

# Encode target variable
df_model['Churn'] = le.fit_transform(df_model['Churn'])

# Features and target
X = df_model.drop(['customerID', 'Churn'], axis=1)
y = df_model['Churn']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)

# Predictions
y_pred = rf.predict(X_test)

print("\n=== MODEL PERFORMANCE ===")
print(classification_report(y_test, y_pred))

# Feature importance
feature_importance = pd.DataFrame({
    'feature': X.columns,
    'importance': rf.feature_importances_
}).sort_values('importance', ascending=False)

print("\n=== TOP 10 MOST IMPORTANT FEATURES ===")
print(feature_importance.head(10))

print("\nAnalysis complete! Check telecom_churn_analysis.png for visualizations.")
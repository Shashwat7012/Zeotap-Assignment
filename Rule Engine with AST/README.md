# Rule Engine with AST

## Objective
Develop a simple 3-tier rule engine application (Simple UI, API, Backend, Data) to determine user eligibility based on attributes like age, department, income, spend, etc. The system utilizes an Abstract Syntax Tree (AST) to represent conditional rules and allows for dynamic creation, combination, and modification of these rules.
## Data Storage

### Database Choice
MongoDB is used to store rules and application metadata.
### Schema
```json
{
    "rule_id": "ObjectId",
    "rule_string": "String",
    "created_at": "Date",
    "updated_at": "Date"
}
```

### Sample Rules
- **Rule 1:** ((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)
- **Rule 2:** ((age > 30 AND department = 'Marketing')) AND (salary > 20000 OR experience > 5)

## API Design

### Endpoints

#### Create Rule
- **Endpoint:** `POST /api/rules`
- **Description:** Takes a string representing a rule and returns a Node object representing the corresponding AST.
- **Input:** `rule_string` (String)
- **Output:** Node (AST representation)

#### Combine Rules
- **Endpoint:** `POST /api/rules/combine`
- **Description:** Takes a list of rule strings and combines them into a single AST.
- **Input:** `rules` (Array of Strings)
- **Output:** Node (Root node of the combined AST)

#### Evaluate Rule
- **Endpoint:** `POST /api/rules/evaluate`
- **Description:** Evaluates the combined rule's AST against the provided data.
- **Input:** `data` (JSON Object)
- **Output:** Boolean (True if eligible, False otherwise)

## Test Cases
- **Individual Rule Creation:** Create individual rules from examples using `create_rule` and verify their AST representation.
- **Rule Combination:** Combine example rules using `combine_rules` and ensure the resulting AST reflects the combined logic.
- **Rule Evaluation:** Implement sample JSON data and test `evaluate_rule` for different scenarios.
- **Additional Rule Testing:** Explore combining additional rules and test the functionality.

## Getting Started

### Prerequisites
- Node.js
- MongoDB
## Installation

### Clone the repository:
```bash
git clone <repository-url>
cd Rule-Engine-with-Ast
```
### Install dependencies for the backend:
```bash
cd server
npm install
```
### Install dependencies for the frontend:
```bash
cd client
npm install
```
## Running the Application

### To start the backend server:
```bash
cd src/node server.js
npm start
```
### To start the frontend:
```bash
cd client
npm run dev
```
## Thank You
Thank you for your interest in the Rule Engine with AST!.



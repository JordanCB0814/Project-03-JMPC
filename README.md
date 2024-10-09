# Project-03-JMPC

**Overview**

In this Project we created 3 interactive Data Visualizations of a DataBase with over 5,000 rows of data. We used MongoDB, Pandas, Matplotlib, and Bokeh for creating our Visualizations. Once created we made a Website in order to easily show our visualizations along with giving the ability to have more user interactiveness.

The CDC was the source of our DataBase, having done a analysis of the topic of Drug Overdose Deaths in the US. We referred to their results in order to see if there are any inconsistencies within our results.

![Screenshot 2024-10-07 185337](https://github.com/user-attachments/assets/e000a283-2aac-4bc0-88b3-2dad3985af1b)



Here is a Screenshot of our DataBase Being stored within MongoDB, where we then exported the data as a json file

![Screenshot 2024-10-07 185034](https://github.com/user-attachments/assets/b34f8774-2efc-464f-8d25-9e97a8caf5a7)

Once we had our DataBase exported we placed the DataBase within a Jupyter Notebook in order to clean our records as you see here. Getting rid of the many NaN records within our data, while also making a DataFrame in order to have easier acess to our Data

![Screenshot 2024-10-07 190634](https://github.com/user-attachments/assets/e3123ff6-67bd-45e6-92a1-54164f43c5a6)

We also Removed some columns within the DataFrame, since we were not using some of the columns data.

![Screenshot 2024-10-07 192750](https://github.com/user-attachments/assets/f66f4175-ef84-45f5-a118-bacb4712e892)

**Visualizations**

We decided upon three different Visualizations for our Website to display. We chose to make a Pie Chart, a Line Graph, and a US Map like the one on the CDC's website. These we felt would have been good representaions of the key points we wanted to show, along with giving each of us a solid challenge.

**Pie Chart**

Here we started with the Pie Chart Graph, using Bokeh in order to grab each value within our Indicator column and organize each unique value by colors and display them on a Pie CHart in order to show percentages of each Value. We recreated this process multiple times going by a year by year basis, in order to give us an easier time seeing the changes by year,

![Screenshot 2024-10-07 194605](https://github.com/user-attachments/assets/981ca928-9887-4985-b17d-97a466227816)

Here was our Final Product of the Pie Chart

![Screenshot 2024-10-08 175424](https://github.com/user-attachments/assets/d2d14dd5-3141-4452-acfd-446655c37806)


**Line Graph**

Next we had the goal to create a Line Graph that disaplys the total count of Deaths per year in order to capture the fluctuation of Deaths by years. We Started with grapping the counts and organizing them by a year basis in order to create a DataFrame in order to simply create the line graph.

![Screenshot 2024-10-07 195049](https://github.com/user-attachments/assets/4b6a9ed1-99ea-4dbe-b601-9739f1a09cd6)

Next we worked on creating a the graph itself. We also wanted the line graph to show the percentage change within the counts of each year, in order to show how much change there was within the totals.

![Screenshot 2024-10-07 195143](https://github.com/user-attachments/assets/578e465c-3efc-4e38-a9d9-6817c5a78d0a)

Here is our Final Result of the Line Graph

![image](https://github.com/user-attachments/assets/713f309d-2596-49d0-bf3f-9133a3ea5c39)


**US Map Display**

Our Final Visualization proved to be the most challenging, but most satisfying once we finished it. First we had to organize the data by Years and create CSV files for each years results, this way we could easily create a Map Chart for each year

![image](https://github.com/user-attachments/assets/89644745-f91a-47d7-b50f-2d31e217f08d)

Afterwards we grabbed the Longitude and Latitude of the State Capitals, that way we can easily refer to the locations for the results and make the points nice and concise on the map itself.

![image](https://github.com/user-attachments/assets/deab1dbb-b341-4091-a79c-e3eed61c8b7b)

Here was then our Final Product for the Map

![image](https://github.com/user-attachments/assets/8587676a-c0b4-4f75-a93f-1a8289a54e39)


**Website Html**

We wanted to create a Website in order to have an easier time displaying our interactive visualizations, and because most of our Charts would only be processed as an HTML file itself since they are interactive.

We had to create the dropdown menu and create chart frames in order to give a firm outline for containing our charts themselves. We also chose to provide the style within the html itself rather than a CSS file since we primarily customized when creating the charts themselves. In Java Script we created a Function to detect change within the dropdown of our Years dropdown menu, this way we can change our charts according to what the user selects.

![image](https://github.com/user-attachments/assets/02a2c9d9-a38c-4132-a64b-2c6eea187871)

First Half of HTML
![Screenshot 2024-10-08 183929](https://github.com/user-attachments/assets/aefc4ac2-a123-4b94-836e-a9d2c46c8c9a)

Second Half of HTML
![Screenshot 2024-10-08 183941](https://github.com/user-attachments/assets/bf270adc-29d7-457c-b2d7-21da1b08d957)

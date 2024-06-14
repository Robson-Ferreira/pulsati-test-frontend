import { Bar, Doughnut, Line} from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import { defaults } from 'chart.js/auto';
import { useEffect } from 'react';

import {
  AppWrapper,
  Container,
  MainContent,
  DataCardRevanue,
  DataCardCustomer,
  DataCardCategory,
} from './styles';

import revenueData from './data/revenueData.json';
import sourceData from './data/sourceData.json';

import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Content } from '../../components/Content';

import { useAuth } from '../../contexts/Auth/AuthContext';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export const Dashboard = function() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      return navigate(`/login`);
    }
  }, []);

  return (
    <AppWrapper>
      <Container>
        <Header />
        <Menu />
        <MainContent>
          <Content>
            <DataCardRevanue>
              <Line
                data={{
                  labels: revenueData.map((data) => data.label),
                  datasets: [
                    {
                      label: 'Revenue',
                      data: revenueData.map((data) => data.revenue),
                      backgroundColor: '#064FF0',
                      borderColor: '#064FF0',
                    },
                    {
                      label: 'Cost',
                      data: revenueData.map((data) => data.cost),
                      backgroundColor: '#FF3030',
                      borderColor: '#FF3030',
                    },
                  ],
                }}
                options={{
                  elements: {
                    line: {
                      tension: 0.5,
                    },
                  },
                  plugins: {
                    title: {
                      text: 'Monthly Revenue & Cost',
                    },
                  },
                }}
              />
            </DataCardRevanue>

            <DataCardCustomer>
              <Bar
                data={{
                  labels: sourceData.map((data) => data.label),
                  datasets: [
                    {
                      label: 'Count',
                      data: sourceData.map((data) => data.value),
                      backgroundColor: [
                        'rgba(43, 63, 229, 0.8)',
                        'rgba(250, 192, 19, 0.8)',
                        'rgba(253, 135, 135, 0.8)',
                      ],
                      borderRadius: 5,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: 'Revenue Source',
                    },
                  },
                }}
              />
            </DataCardCustomer>

            <DataCardCategory>
              <Doughnut
                data={{
                  labels: sourceData.map((data) => data.label),
                  datasets: [
                    {
                      label: 'Count',
                      data: sourceData.map((data) => data.value),
                      backgroundColor: [
                        'rgba(43, 63, 229, 0.8)',
                        'rgba(250, 192, 19, 0.8)',
                        'rgba(253, 135, 135, 0.8)',
                      ],
                      borderColor: [
                        'rgba(43, 63, 229, 0.8)',
                        'rgba(250, 192, 19, 0.8)',
                        'rgba(253, 135, 135, 0.8)',
                      ],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: 'Revenue Sources',
                    },
                  },
                }}
              />
            </DataCardCategory>
          </Content>
        </MainContent>
      </Container>
    </AppWrapper>
  );
}

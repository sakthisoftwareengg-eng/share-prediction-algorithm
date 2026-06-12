import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketData { 

  constructor() { }

  getMarketIndices() {
    return of([
      { name: 'NIFTY 50', value: 19847.90, change: 156.25, changePercent: 0.79, trend: 'up' },
      { name: 'SENSEX', value: 66795.14, change: 528.17, changePercent: 0.80, trend: 'up' },
      { name: 'NIFTY BANK', value: 44821.85, change: -234.15, changePercent: -0.52, trend: 'down' },
      { name: 'NIFTY IT', value: 31456.70, change: 287.45, changePercent: 0.92, trend: 'up' },
      { name: 'NIFTY AUTO', value: 15234.40, change: 89.65, changePercent: 0.59, trend: 'up' },
      { name: 'NIFTY PHARMA', value: 13789.25, change: -67.80, changePercent: -0.49, trend: 'down' },
      { name: 'NIFTY 50', value: 19847.90, change: 156.25, changePercent: 0.79, trend: 'up' },
      { name: 'SENSEX', value: 66795.14, change: 528.17, changePercent: 0.80, trend: 'up' },
      { name: 'NIFTY BANK', value: 44821.85, change: -234.15, changePercent: -0.52, trend: 'down' },
      { name: 'NIFTY IT', value: 31456.70, change: 287.45, changePercent: 0.92, trend: 'up' }
    ]);
  }

  getPortfolioData() {
    return of([
      { symbol: 'RELIANCE', company: 'Reliance Industries', qty: 50, avgPrice: 2450.50, currentPrice: 2523.75, value: 126187.50, sector: 'Energy' },
      { symbol: 'TCS', company: 'Tata Consultancy Services', qty: 25, avgPrice: 3650.25, currentPrice: 3742.80, value: 93570.00, sector: 'IT' },
      { symbol: 'HDFCBANK', company: 'HDFC Bank Limited', qty: 75, avgPrice: 1587.90, currentPrice: 1634.25, value: 122568.75, sector: 'Banking' },
      { symbol: 'INFY', company: 'Infosys Limited', qty: 40, avgPrice: 1456.80, currentPrice: 1523.45, value: 60938.00, sector: 'IT' },
      { symbol: 'ITC', company: 'ITC Limited', qty: 100, avgPrice: 456.75, currentPrice: 478.90, value: 47890.00, sector: 'FMCG' },
      { symbol: 'BHARTIARTL', company: 'Bharti Airtel Limited', qty: 60, avgPrice: 823.40, currentPrice: 834.25, value: 50055.00, sector: 'Telecom' }
    ]);
  }

  getWatchlistData() {
    return of([
      {symbol: 'TVS', company: 'TVS Motor Company', price: 2523.75, change: 12.45, changePercent: 3.01, volume: '2.4M' },
      { symbol: 'WIPRO', company: 'Wipro Limited', price: 425.65, change: 12.45, changePercent: 3.01, volume: '2.4M' },
      { symbol: 'MARUTI', company: 'Maruti Suzuki India', price: 9847.20, change: -145.80, changePercent: -1.46, volume: '1.8M' },
      { symbol: 'SBIN', company: 'State Bank of India', price: 567.35, change: 18.90, changePercent: 3.44, volume: '5.2M' },
      { symbol: 'BAJFINANCE', company: 'Bajaj Finance Limited', price: 6789.45, change: 234.70, changePercent: 3.58, volume: '1.1M' },
      { symbol: 'ADANIPORTS', company: 'Adani Ports & SEZ', price: 756.80, change: 68.45, changePercent: 9.94, volume: '3.7M' },
      { symbol: 'ASIANPAINT', company: 'Asian Paints Limited', price: 2987.65, change: -45.30, changePercent: -1.49, volume: '890K' }
    ]);
  }

  getTopGainers() {
    return of([
      { symbol: 'ADANIPORTS', price: 756.80, change: 68.45, changePercent: 9.94 },
      { symbol: 'TATASTEEL', price: 123.50, change: 8.95, changePercent: 7.81 },
      { symbol: 'JSWSTEEL', price: 678.90, change: 45.60, changePercent: 7.20 },
      { symbol: 'HINDALCO', price: 445.75, change: 28.30, changePercent: 6.78 },
      { symbol: 'COALINDIA', price: 234.80, change: 14.65, changePercent: 6.65 }
    ]);
  }

  getTopLosers() {
    return of([
      { symbol: 'BHARTIARTL', price: 834.25, change: -52.45, changePercent: -5.91 },
      { symbol: 'HCLTECH', price: 1245.60, change: -67.80, changePercent: -5.16 },
      { symbol: 'TECHM', price: 1089.75, change: -48.90, changePercent: -4.30 },
      { symbol: 'LT', price: 2456.80, change: -89.45, changePercent: -3.51 },
      { symbol: 'ULTRACEMCO', price: 7845.20, change: -234.55, changePercent: -2.90 }
    ]);
  }

  getChartData() {
    return of([
      { time: '09:15', nifty: 19691.65, sensex: 66267.14 },
      { time: '10:00', nifty: 19745.30, sensex: 66445.28 },
      { time: '11:00', nifty: 19798.45, sensex: 66623.47 },
      { time: '12:00', nifty: 19823.75, sensex: 66712.83 },
      { time: '13:00', nifty: 19847.90, sensex: 66795.14 },
      { time: '14:00', nifty: 19865.20, sensex: 66856.92 },
      { time: '15:30', nifty: 19847.90, sensex: 66795.14 }
    ]);
  }

  getSectorData() {
    return of([
      { sector: 'IT', value: 154508, color: '#3B82F6' },
      { sector: 'Banking', value: 122568, color: '#10B981' },
      { sector: 'Energy', value: 126187, color: '#F59E0B' },
      { sector: 'FMCG', value: 47890, color: '#8B5CF6' },
      { sector: 'Telecom', value: 50055, color: '#EF4444' }
    ]);
  }

  getMarketNews() {
    return of([
      { title: 'Nifty hits fresh all-time high amid strong buying in IT stocks', time: '2 mins ago', impact: 'positive' },
      { title: 'RBI maintains repo rate at 6.5%, focuses on inflation control', time: '15 mins ago', impact: 'neutral' },
      { title: 'Foreign investors net buyers for 3rd consecutive session', time: '32 mins ago', impact: 'positive' },
      { title: 'Banking stocks under pressure on NPA concerns', time: '1 hour ago', impact: 'negative' },
      { title: 'IT export growth expected to moderate in Q3FY24', time: '2 hours ago', impact: 'negative' },
      { title: 'Oil prices hit multi-year high amid geopolitical tensions', time: '3 hours ago', impact: 'negative' },
      { title: 'PM announces new stimulus package to boost economic growth', time: '4 hours ago', impact: 'positive' },
      { title: 'Tech giants report strong Q2 results', time: '5 hours ago', impact: 'positive' },
      { title: 'Steel stocks rally on strong demand', time: '6 hours ago', impact: 'positive' },
      { title: 'Auto stocks under pressure on supply chain disruptions', time: '7 hours ago', impact: 'negative' }  
    ]);
  }
}
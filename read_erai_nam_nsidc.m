clear all; 
close all;
startup;
format long;

totpentad=18;
namindex=[];

for icount=1:totpentad
 fid=fopen(strcat('erai_namindex_pentad',num2str(icount),'_1979_2012.dat'),'r','ieee-le');
 pc1=fread(fid,inf,'float32');
 fclose(fid);
 
 pc1=reshape(pc1,22,34);
 namindex=[namindex  pc1];
end

%dim 1=no. of levels; dim 2=no. of years; dim3=no. of pentads
namindex=reshape(namindex,22,34,totpentad);

%detrend
namindexfil=[];
namindexfih=[];
for i=2:33
    namindexfil(:,i-1,:)=mean(namindex(:,i-1:i+1,:),2);
    namindexfih(:,i-1,:)=namindex(:,i,:)-namindexfil(:,i-1,:);
end

fid=fopen('nsidc_sicanomfih_nov_barentssic_1980_2011.dat','r','ieee-le');
%fid=fopen('ncep_cowlanomfih_nov_1980_2011.dat','r','ieee-le');
sic=fread(fid,inf,'float32');
fclose(fid);

cor=[];
p=[];
for ilev=1:22
    for ipentad=1:totpentad
     stddev=std(namindexfih(ilev,1:30,ipentad));
     [corr,pp]=corrcoef(namindexfih(ilev,1:30,ipentad),sic(1:30));
%     [corr,pp]=corrcoef(namindexfih(ilev,1:32,ipentad),namindexfih(17,1:32,6));
     cor(ilev,ipentad)=corr(1,2);
     if pp(1,2)>0.1
      p(ilev,ipentad)=0;
     else 
      p(ilev,ipentad)=1;
     end
    end
end

%lev=[1000 925 850 700 600 500 400 300 250 200 150 100 70 50 30 20 10 7 5 3 2 1];
lev=[1000 925 850 700 600 500 400 300 250 200 150 100 70 50 30 20 10];
pentad=[1:totpentad];

[x,y]=meshgrid(pentad,lev);

addpath('./cbrewer');

scrsz = get(0,'ScreenSize');
%[left, bottom, width, height]
figure('Position',[1 scrsz(4)/2 scrsz(3)/1.2*0.6 scrsz(4)/1.5]);
figure(1),clf
CT=cbrewer('div','RdBu',21);
colormap(flipud(CT(11-7:11+1,:)));
v=[-1:0.1:1];
[C,h]=contourf(x,y,cor(1:end-5,:),v);
clabel(C,h,'FontSize',22,'Rotation',0,'LabelSpacing',600);
hold on;
plot(x.*p(1:end-5,:),y.*p(1:end-5,:),'k+');
hold off;

set(gca,'YDir','reverse','yscale','log');
set(gca,'YTick',[10 30 50 70 100 300 500 700 1000]);
set(gca,'XTick',[2 4 6 8 10 12 14 16 18 20 22 24]);
ylabel('Pressure levels (hPa)');
xlabel('Pentad no. (counting 1 from Nov)');
%set(gca,'XTick',['Oct','Nov']);
hold off;
title('Correlation coefficients of NAM Index and tSIC(Nov)');
%colorbar('YTick',v);

clear all; 
close all;
startup;
format long;

totpentad=42;
pentadno=[1:totpentad];
namindex=[];

for icount=-5:totpentad-6
 fid=fopen(strcat('ncep_namindex2_pentad',num2str(icount),'_1979_2012.dat'),'r','ieee-le');
% fid=fopen(strcat('ncep_polarair_pentad',num2str(icount),'_1979_2012.dat'),'r','ieee-le');
% fid=fopen(strcat('ncep_cowlindexgh_pentad',num2str(icount),'_1979_2012.dat'),'r','ieee-le');
 pc1=fread(fid,inf,'float32');
 fclose(fid);
 
 pc1=reshape(pc1,17,34);
 namindex=[namindex  pc1];
end

%dim 1=no. of levels; dim 2=no. of years; dim3=no. of pentads
namindex=reshape(namindex,17,34,totpentad);

%detrend
namindexfil=[];
namindexfih=[];
for i=3:32
    namindexfil(:,i-2,:)=mean(namindex(:,i-2:i+2,:),2);
    namindexfih(:,i-2,:)=namindex(:,i,:)-namindexfil(:,i-2,:);
end

%fid=fopen('nsidc_sicanomfih5yhigpass_sep_90to210_1981_2010.dat','r','ieee-le');
%fid=fopen('ncep_air925_50to70n_feb_5yhighpass_1982_2010.dat','r','ieee-le');
%fid=fopen('nsidc_sicanomfih5yhigpass_nov_wholearctic_1981_2010.dat','r','ieee-le');
%sic2=fread(fid,inf,'float32');
%fclose(fid);

%fid=fopen('nsidc_sicanomfih5yhigpass_15octto16novmean_barentssic_1981_2010.dat','r','ieee-le');
fid=fopen('nsidc_sicanomfih5yhigpass_feb_barentssic_1981_2010.dat','r','ieee-le');
%fid=fopen('ncep_tas_eurasia_feb_5yhighpass_1982_2011.dat','r','ieee-le');
sic3=fread(fid,inf,'float32');
fclose(fid);

%fid=fopen('ncep_zg500_oct_5yhighpass_pc1_wnhe30n_1981_2010.dat','r','ieee-le');
%sic=fread(fid,inf,'float32');
%fclose(fid);

cor=[];
p=[];
for ilev=1:17
    for ipentad=1:totpentad
     stddev=std(namindex(ilev,3:32,ipentad));
     [corr,pp]=corrcoef(namindexfih(ilev,1:30,ipentad),sic3(1:30)');
%     [corr,pp]=corrcoef(namindexfih(ilev,1:30,ipentad),mean(namindexfih(16,1:30,25:30),3));
     cor(ilev,ipentad)=corr(1,2);
%
%     [corr13,pp13]=corrcoef(namindexfih(ilev,1:30,ipentad),sic3(1:30)');
%     [corr23,pp23]=corrcoef(sic2(1:30)',sic3(1:30)')
%     r12=corr(1,2); r13=corr13(1,2); r23=corr23(1,2);
%     cor(ilev,ipentad)=(r12-r13*r23)/sqrt((1-r13^2)*(1-r23^2));
     if pp(1,2)>0.05
      p(ilev,ipentad)=0;
     else 
      p(ilev,ipentad)=1;
     end
%begin this calculates change    
%     cor(ilev,ipentad)=-(mean(namindex(ilev,13:23,ipentad),2)- ...
%         mean(namindex(ilev,24:34,ipentad),2))./std(namindex(ilev,1:34,ipentad));
%     namdiffstd=std(namindex(ilev,13:23,ipentad)./std(namindex(ilev,1:34,ipentad))-...
%         namindex(ilev,24:34,ipentad)./std(namindex(ilev,1:34,ipentad)));
%     tstat=abs(cor(ilev,ipentad))/namdiffstd*11.;
%     if tstat-1.7>0
%       p(ilev,ipentad)=1;
%     else 
%      p(ilev,ipentad)=0;
%     end
%end
     
%     [r,pp]= partialcorr(namindexfih(ilev,1:30,ipentad)',sic2,sic);
%     cor(ilev,ipentad)=r;
%     if p >0.05
%      p(ilev,ipentad)=0;
%     else 
%      p(ilev,ipentad)=1;
%     end
     
    end
end

lev=[1000 925 850 700 600 500 400 300 250 200 150 100 70 50 30 20 10];
pentad=[-5:1:totpentad-6];

[x,y]=meshgrid(pentad,lev);

addpath('./cbrewer');

%composites
%i=find(sic3>0);
%dim 1=no. of levels; dim 2=no. of years; dim3=no. of pentads
%coo=mean(namindexfih(1:17,i,1:30),2)-mean(namindexfih(1:17,1:30,1:30),2);
%cor=squeeze(coo);

scrsz = get(0,'ScreenSize');
%[left, bottom, width, height]
figure('Position',[1 scrsz(4)/2 scrsz(3)/1.2 scrsz(4)/2]);
figure(1),clf
CT=cbrewer('div','RdBu',21);
%CT=[CT(1:10,:); CT(10,:); CT(11:end,:)];
colormap(flipud(CT(11-5:11+6,:)));
v=[-1:0.1:1];
%colormap(CT(1:9,:));
[C,h]=contourf(x,y,cor,v);
clabel(C,h,'FontSize',22,'Rotation',0,'LabelSpacing',600);
hold on;
plot(x.*p,y.*p,'k+');
hold off;

set(gca,'YDir','reverse','yscale','log');
set(gca,'YTick',[10 30 50 70 100 300 500 700 1000]);
set(gca,'XTick',[ -11 -5 1 7 13 19 25 31]);
ylabel('Pressure levels (hPa)');
xlabel('Pentad no. (counting 1 from Nov)');
%set(gca,'XTick',['Oct','Nov']);
hold off;
title('Correlation coefficients of NAM and ');
%title('NAM Index change from 1991/2001 to 2002/2012');
colorbar('YTick',v);

figure(2),clf
plot(mean(cor(:,1:3),2),lev,'k-o');
set(gca,'YDir','reverse','yscale','log');
set(gca,'YTick',[10 30 50 70 100 300 500 700 1000]);
set(gca,'XTick',[0 0.1 0.2 0.3 0.4 0.5]);
axis([0 0.4 10 1000]);
ylabel('Pressure levels (hPa)');
title('Corr coeff of Oct NAM & Nov SIC'); 

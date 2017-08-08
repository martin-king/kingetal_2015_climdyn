clear all; close all; startup;

y=[];
for imonth=1:12
    fid=fopen(strcat('barentstsic_',num2str(imonth),'_1980_2012.dat'),'r','ieee-le');
    tsic=fread(fid,inf,'float32');
    fclose(fid);
    
    y=[y tsic];
end

x=1980:2012;

yfih=[];

for imonth=1:12
 figure(1)
 plot(x,y(:,imonth),'-o');
 text(2012.5,y(end,imonth),num2str(imonth),...
     'HorizontalAlignment','left')
 hold all;
 for t=3:31
     yfih(t-2,imonth)=y(t,imonth)-mean(y(t-2:t+2,imonth));
 end
end

axis([1980 2015 0 0.8]); 
hold off;

x=1982:2010;
for imonth=1:12
    figure(2)
    plot(x,yfih(:,imonth),'-o');
    hold all;
end
hold off;

for imonth=1:12
    figure(3)
    plot(imonth,std(yfih(:,imonth))./std(y(:,imonth)),'k+');
    hold all
end
hold off;

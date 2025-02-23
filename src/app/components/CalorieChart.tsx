interface CalorieData {
  day: string;
  calories: number;
  target: number;
}

interface CalorieChartProps {
  data: CalorieData[];
  title?: string;
  subtitle?: string;
}

export function CalorieChart({ data, title = "Kalori Takibi", subtitle = "Günlük hedef: 2000 kcal" }: CalorieChartProps) {
  return (
    <div className="mb-8 overflow-hidden rounded-2xl border border-border bg-white/80 p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xl">
          📊
        </div>
        <div>
          <h2 className="text-lg font-semibold text-primary">{title}</h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary"></div>
            <span className="text-sm text-muted-foreground">Alınan</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-accent/50"></div>
            <span className="text-sm text-muted-foreground">Hedef</span>
          </div>
        </div>
      </div>

      <div className="relative h-[400px] w-full">
        {/* Y ekseni değerleri */}
        <div className="absolute left-0 top-0 h-[300px] w-12 flex flex-col justify-between text-sm text-muted-foreground py-4">
          <span>2500</span>
          <span>2000</span>
          <span>1500</span>
          <span>1000</span>
          <span>500</span>
          <span>0</span>
        </div>

        {/* Grafik alanı */}
        <div className="relative ml-12 h-[300px]">
          {/* Grid çizgileri */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-px w-full bg-border"></div>
            ))}
          </div>

          {/* Hedef çizgisi */}
          <div className="absolute top-[20%] w-full border-t-2 border-dashed border-accent/50"></div>

          {/* Günlük değerler ve noktalar */}
          <div className="absolute inset-0 flex items-end justify-between px-4">
            {data.map((item, index) => {
              const heightPercentage = (item.calories / 2500) * 100;
              const bottomPosition = (heightPercentage / 100) * 240;

              return (
                <div key={index} className="relative flex flex-col items-center w-full" style={{ height: '100%' }}>
                  {/* Kalori noktası */}
                  <div 
                    className={`absolute w-4 h-4 rounded-full ${
                      item.calories > item.target ? 'bg-red-500' : 'bg-green-500'
                    } border-2 border-white shadow-lg hover:scale-125 transition-transform`}
                    style={{ 
                      bottom: `${bottomPosition}px`,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 20
                    }}
                  />
                  {/* Gün etiketi */}
                  <div className="absolute bottom-[-3.5rem] text-sm font-medium text-muted-foreground whitespace-nowrap">
                    {item.day}
                  </div>
                  {/* Kalori değeri */}
                  <div className="absolute bottom-[-5.5rem] text-sm font-medium text-primary whitespace-nowrap">
                    {item.calories} kcal
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 
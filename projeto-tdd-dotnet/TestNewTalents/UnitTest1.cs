using NewTalents;

namespace TestNewTalents;

public class UnitTest1
{
    public Calculadora constructor()
    {
        Calculadora calculadora = new Calculadora();
        return calculadora;
    }
    [Theory]
    [InlineData(1,2,3)]
    [InlineData(1,9,10)]
    public void TestSomar(int a, int b, int expected)
    {
        
        int res = constructor().somar(a,b);
        Assert.Equal(expected, res);
    }

    [Theory]
    [InlineData(22,2,20)]
    [InlineData(10,5,5)]
    public void TestSubtrair(int a, int b, int expected)
    {
        int res = constructor().subtrair(a, b);
        Assert.Equal(expected, res);
    }
    
    [Theory]
    [InlineData(2,2,4)]
    [InlineData(9,5,45)]
    public void TestMultiplicar(int a, int b, int expected)
    {
        int res = constructor().multiplicar(a, b);
        Assert.Equal(expected, res);
    }
    
    [Theory]
    [InlineData(2,2,1)]
    [InlineData(8,2,4)]
    public void TestDividr(int a, int b, int expected)
    {
        int res = constructor().dividir(a, b);
        Assert.Equal(expected, res);
    }

    [Fact]
    public void TestDividirPorZero()
    {
        Assert.Throws<DivideByZeroException>(() => constructor().dividir(3,0));
    }

    [Fact]
    public void TestHistorico()
    {
        Calculadora calc = constructor();
        calc.somar(1,5);
        calc.somar(11,54);
        calc.subtrair(98,47);
        calc.subtrair(795,247);
        calc.multiplicar(5,247);
        calc.dividir(10,2);
        Assert.NotEmpty(calc.historico());
    }
}
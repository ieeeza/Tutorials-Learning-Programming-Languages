// aprimorar a taxa de renovação de assinaturas

Random random = new Random();
int daysUntilExpiration = random.Next(12);
int discountPercentage = 0;

if (daysUntilExpiration <= 10) {
    Console.WriteLine("Your subscription will expire soon. Renew now!");
    return;
}

if (daysUntilExpiration <= 5) {
    Console.WriteLine($"Your subscription expires in {daysUntilExpiration} days. Renew now and save 10%!");
    return;
}

if (daysUntilExpiration == 1) {
    Console.WriteLine("Your subscription expires within a day! Renew now and save 20%!");
    return;
}

if (daysUntilExpiration == 0) {
    Console.WriteLine("Your subscription has expired.");
}

using System;
using System.Collections.Generic;
    string[] ids = { "B123", "C234", "A345", "C15", "B177", "G3003", "C235", "B179" };
    List<string> fraudulentIds = new List<string>();

    foreach (string id in ids) {
        if (id.StartsWith("B")) {
            fraudulentIds.Add(id);
        }
    }

    Console.WriteLine("IDs suspeitos:");
    foreach (string id in fraudulentIds) {
        Console.WriteLine(id);
    }


